import React from 'react';
import CalorieCalendar from '../../component/calendar/calendar';
import './homepage-style.css';
import Mealinputform from '../../component/forms/mealInputform/mealInputform'

export default class homePage extends React.Component {

    state = {
        date: new Date()
    }

    
    render() {
        return (

            <div className="home">
                <h1>My Dashboard</h1>
                <h2>myCalories / Week = <p className="calorieTotal">9000</p>{}</h2>
                <h2>myCalories / Month = <p className="calorieTotal">90000</p>{}</h2>
                <CalorieCalendar
                />
                <Mealinputform />
            </div>

        )
    }

}