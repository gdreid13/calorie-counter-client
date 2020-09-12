import React from 'react';
import RegForm from '../../component/forms/regForm/regForm'
import './regPage-style.css'
export default class RegPage extends React.Component {
    static defaultProps = {
        history: {
            push: () => { },
        },
    }

    handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/login')
    }

    render() {
        return (
            <section>
                <header role="banner">
                    <h1>Carb Counter</h1>
                    <h3>Sign up keep track of your calorie intake and stay fit!</h3>
                </header>
                <RegForm
                    onRegistrationSuccess={this.handleRegistrationSuccess}
                />
            </section>
        )
    }
}