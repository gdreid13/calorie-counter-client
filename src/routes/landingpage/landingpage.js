import React from 'react';
import './landingpage-style.css';
import { Link } from 'react-router-dom'


export default class LandingPage extends React.Component{
    render() {
        return (
            <div className="landing">
                <h3 className="landing__header">Keep track of your calorie intake to stay fit!</h3>
                <h4 className="landing__description"><Link className="landing__link" to={'/login'}>Login</Link> or <Link className="landing__link" to={'/register'}>Sign Up</Link> to keep track of your weekly and monthly calorie intake</h4>
                <img className="landing__img" src="/assets/landing.jpg" alt="jogger"></img>
            </div>
        )

    }
}