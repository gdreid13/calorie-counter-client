import React from 'react';
//import AuthHelperService from '../../../services/AuthHelperService'
import './regForm-style.css'

export default class RegForm extends React.Component {

    static defaultProps = {
        onRegistrationSuccess: () => { },
        handleCancel: ()=>{}
    }

    state = { error: null }

    handleSubmit = ev => {
        ev.preventDefault()
        console.log('Form submitted')
        this.props.onRegistrationSuccess()
        /*
        const { name, age, gender, user_name, password } = ev.target
        this.setState({ error: null })
        AuthHelperService.postUser({
            name: name.value,
            age: age.value,
            gender: gender.value,
            user_name: user_name.value,
            password: password.value,
        })
            .then(user => {
                name.value = ''
                age.value = ''
                gender.value = ''
                user_name.value = ''
                password.value = ''
                this.props.onRegistrationSuccess()
            })
            .catch(res => {
                this.setState({ error: res.message })
            })
        */
    }

    render() {
        return (
            <form className='form register-form' onSubmit={this.handleSubmit}>
                <div className='form_input'>
                    <label htmlFor="name">Name</label>
                    <input placeholder='Full Name' type="text" name='name' id='name' />
                </div>
                <div className='form_input'>
                    <label htmlFor="age">Age</label>
                    <input placeholder='Enter your age between 18 to 100' type="number" name='age' id='age' min='18'max='100' />
                </div>
                <div className='form_input'>
                    <label htmlFor="username">Email</label>
                    <input type="text" name='user_name' id='user_name' />
                </div>
                <div className='form_input'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' />
                </div>
                <div className='form_input'>
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" name="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className='form_control'>
                    <button type='button' onClick={this.props.handleCancel}>Cancel</button>
                    <button type='submit'>Register</button>
                </div>
                
            </form>
        )
    }
}