import React from 'react';
import Calendar from 'react-calendar';
import './react-calendar.scss';

export default class CalorieCalendar extends React.Component {

	state = {
		date: new Date(),
		currentDate: '',
		// hover:new Date(),
    };
    

    
	render() {
		return (
			<div>
				<Calendar className="react-calendar"
				value={this.state.date} 
				onChange={(date) => console.log(date)} />
			</div>
		);
	}
}
