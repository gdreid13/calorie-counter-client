import React from 'react';
import './landingpage-style.css';
import NavBar from '../../component/navBar/navBar';
import Footer from '../../component/footer/footer';
import '../../assets/landing.jpg';

export default class landingPage extends React.Component {
    render() {
        return (
            <div className="landing">
                <NavBar />
                <h1>myCalories</h1>
                <h3>Keep track of your calorie intake to stay fit!</h3>
                <h4>This app will allow you to keep track of your weekly and monthly calorie intake</h4>
                <img src="/assets/landing.jpg" alt="Landing Page Photo"></img>
                <Footer />
            </div>
        )

    }
}