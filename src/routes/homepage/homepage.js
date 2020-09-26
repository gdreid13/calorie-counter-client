import React from 'react';
import CalorieCalendar from '../../component/calendar/calendar';
import Mealinputform from '../../component/forms/mealInputform/mealInputform';
import './homepage-style.css';
import axios from 'axios'
import moment from 'moment';
import {MealApiServices} from '../../services/api-service'

export default class HomePage extends React.Component {
	state = {
		date: new Date(),
		allMeals:[],
		mealsInfoOfTheMonth: [],
		currentMealInfo: {},
		caloriesOfTheMonth: 0,
		caloriesOfTheWeeks: 0
	};

	componentDidMount(){
		const {userId} = this.props
		MealApiServices.getMealsByUser(userId)
			.then(array=>this.setState({allMeals: array}))
			.then(()=>this.updateCurrentMeal())	
	}
	updateCurrentMeal=()=>{
		const {allMeals,date}= this.state
		const format = (date) => moment(date).format('YYYY-MM-DD')
		const currentMeal= allMeals.find(meal=>format(meal.dateofmeal)===format(date))
		if (currentMeal) {
			this.setState({currentMealInfo:currentMeal});
		}
		else this.setState({currentMealInfo:{}})		
	}

	getSelectedDate = async (d) => {
		const selectedDate = await d;
		this.setState({
			date: new Date(selectedDate).toISOString(),	
		});
		this.updateCurrentMeal()
		
		/*
		const {mealsInfoOfTheMonth,date}= this.state
		const currentMeal = mealsInfoOfTheMonth.filter((meal) => meal.dateofmeal.slice(0,10)===date.slice(0,10));
		*/
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
	getMealInfoOfTheDay = ()=>{};
	render() {
		const {date,mealsInfoOfTheMonth,currentMealInfo}= this.state
		let selectedDate = new Date(date);	
		return (
			<div className="home">
				<h1>My Dashboard</h1>
				<h2>
					myCalories / Week = <p className="calorieTotal">9000</p>	
				</h2>
				<h2>
					myCalories / Month = <p className="calorieTotal">{mealsInfoOfTheMonth}</p>	
				</h2>
				<CalorieCalendar 
					getSelectedDate={this.getSelectedDate} 
					getMealInfoByMonth={this.getMealInfoByMonth}
					getMealInfoOfTheDay={this.getMealInfoOfTheDay}/>

				{(selectedDate.toString() === 'Invalid Date') ? <h2> Select Date </h2> : <h2> {selectedDate.toDateString()} </h2>}

				<Mealinputform 
					selectedDate={selectedDate} 
					currentMealInfo={currentMealInfo}
					userId={this.props.userId}/>
			</div>
		);
	}
}
