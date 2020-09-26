import React from 'react';
import CalorieCalendar from '../../component/calendar/calendar';
import './homepage-style.css';
import axios from 'axios';
import Mealinputform from '../../component/forms/mealInputform/mealInputform';

export default class HomePage extends React.Component {
	state = {
		date: '',
		mealsInfoOfTheMonth: [],
		currentMealInfo: {},
		caloriesOfTheMonth: 0,
		caloriesOfTheWeeks: 0
	};
	componentDidMount() {
		this.getMealsinfoOnRender();
		
	}

	getMealsinfoOnRender = ()=>{
		const currentMonth = new Date().toISOString();
		console.log("sdfasdf")
		axios
			.get(`http://localhost:8000/api/meals/mealsbymonth/${currentMonth.slice(0, 7)}`)
			.then((res) => {
				this.setState({ mealsInfoOfTheMonth: res.data });
				return res.data;
			})
			.then((res) => {
				let calorieCounterForTheMonth = 0;
				for (let i = 0; i < res.length; i++) {
					calorieCounterForTheMonth = Number(res[i].alldaycalories) + Number(calorieCounterForTheMonth);
				}

				this.setState({ caloriesOfTheMonth: calorieCounterForTheMonth });
			});
	}

	getSelectedDate = async (date) => {
		const selectedDate = await date;

		this.setState({
			date: new Date(selectedDate).toISOString()
		});
		const currentMeal = this.state.mealsInfoOfTheMonth.filter(
			(meal) => meal.dateofmeal.slice(0, 10) === this.state.date.slice(0, 10)
		);

		this.setState({ currentMealInfo: currentMeal });
	};

	getMealInfoByMonth = async (yearAndMonth) => {
		const selectedYearAndMonth = await yearAndMonth.activeStartDate;
		axios
			.get(
				`http://localhost:8000/api/meals/mealsbymonth/${new Date(selectedYearAndMonth)
					.toISOString()
					.slice(0, 7)}`
			)
			.then((res) => {
				this.setState({ mealsInfoOfTheMonth: res.data });
				return res.data;
			})
			.then((res) => {
				let calorieCounterForTheMonth = 0;
				for (let i = 0; i < res.length; i++) {
					calorieCounterForTheMonth = Number(res[i].alldaycalories) + Number(calorieCounterForTheMonth);
				}

				this.setState({ caloriesOfTheMonth: calorieCounterForTheMonth });
			});
	};

	getMealInfoOfTheDay = () => {};
	render() {
		let selectedDate = new Date(this.state.date);

		return (
			<div className="home">
				<h1>My Dashboard</h1>
				<h2>
					myCalories / Week = <p className="calorieTotal">9000</p>
				</h2>
				<h2>
					myCalories / Month = <p className="calorieTotal">{this.state.caloriesOfTheMonth}</p> <span onClick={()=>this.getMealsinfoOnRender()}>Recalculate </span>
				</h2>
				
				<CalorieCalendar
					getSelectedDate={this.getSelectedDate}
					getMealInfoByMonth={this.getMealInfoByMonth}
					getMealInfoOfTheDay={this.getMealInfoOfTheDay}
				/>

				{selectedDate.toString() === 'Invalid Date' ? (
					<h2> Select Date </h2>
				) : (
					<h2> {selectedDate.toDateString()} </h2>
				)}

				<Mealinputform
					selectedDate={this.state.date}					
					currentMealInfo={this.state.currentMealInfo}
				/>
			</div>
		);
	}
}
