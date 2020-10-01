import React from 'react';
import CalorieCalendar from '../../component/calendar/calendar';
import './homepage-style.css';
import Mealinputform from '../../component/forms/mealInputform/mealInputform';

export default class HomePage extends React.Component {
	state = {
		date: ''
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
				<h1 className="dash">D A S H B O A R D</h1>
				<h2 className="my_calories">
					MONTHLY CALORIES <br></br>  
					<p className="calorieTotal"></p>	
				</h2>
				<CalorieCalendar getSelectedDate={this.getSelectedDate} />

				{(selectedDate.toString() === 'Invalid Date') ? <h2> Select Date </h2> : <h2> {selectedDate.toDateString()} </h2>}

				<Mealinputform />
			</div>
		);
	}
}
