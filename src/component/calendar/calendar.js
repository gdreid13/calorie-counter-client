import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default class CalorieCalendar extends React.Component {
	state = {
		date: new Date(),
		currentDate: ''
    };
    

    
	render() {
		return (
			<div>
				<Calendar value={this.state.date} onChange={(date) => console.log(date)} />
			</div>
		);
	}
}
