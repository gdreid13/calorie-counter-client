import React from 'react';
import './landingpage-style.css';


export default class LandingPage extends React.Component{
    render() {
        return (
            <div className="landing">
                <h1>myCalories</h1>
                <h3>Keep track of your calorie intake to stay fit!</h3>
                <h4>This app will allow you to keep track of your weekly and monthly calorie intake</h4>
                <img src="/assets/landing.jpg" alt="jogger"></img>
            </div>
        )

    }
}