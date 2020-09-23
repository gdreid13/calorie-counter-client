import React from 'react';
import CalorieCalendar from '../../component/calendar/calendar';
import './homepage-style.css';
import Mealinputform from '../../component/forms/mealInputform/mealInputform';

export default class HomePage extends React.Component {
	state = {
		date: new Date()
	};

	getSelectedDate = async (date) => {
		const selectedDate = await date;
		this.setState({
			date: selectedDate
		});
	};

	render() {
		let selectedDate = new Date(this.state.date);	
		return (
			<div className="home">
				<h1>My Dashboard</h1>
				<h2>
					myCalories / Week = <p className="calorieTotal">9000</p>
					
				</h2>
				<h2>
					myCalories / Month = <p className="calorieTotal">90000</p>
					
				</h2>
				<CalorieCalendar getSelectedDate={this.getSelectedDate} />

				{(selectedDate.toString() === 'Invalid Date') ? <h2> Select Date </h2> : <h2> {selectedDate.toDateString()} </h2>}

				<Mealinputform selectedDate={selectedDate} userId={this.props.userId}/>
			</div>
		);
	}
}
