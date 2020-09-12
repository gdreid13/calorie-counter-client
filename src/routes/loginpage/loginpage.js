import React from 'react'
import LoginForm from '../../component/forms/loginform/loginform'
// import { withRouter } from 'react-router-dom'
import './loginpage-style.css'
<<<<<<< HEAD
export default class loginPage extends React.Component{
    render(){
        return(

        <div> 
        </div>
=======
export default class loginPage extends React.Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        },
    }

    handleLoginSuccess = () => {
        this.props.history.push('/home')
    }

    render() {
        return (
        <section>
            <header role="banner">
                <h1>Carb Counter</h1>
                <h3>Sign in to keep track of your calorie intake</h3>
            </header>
            <LoginForm 
                onLoginSuccess={this.handleLoginSuccess}
            />
        </section>
>>>>>>> master
        )
    }
}