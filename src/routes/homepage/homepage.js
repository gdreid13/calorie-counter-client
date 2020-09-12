import React from 'react';
import Calender from '../../component/calender/calender';
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
                <h2>myCalories / Week = {}</h2>
                <h2>myCalories / Month = {}</h2>
                <Calender
                />
                <Mealinputform />
            </div>

        )
    }

}