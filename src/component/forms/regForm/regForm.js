import React from 'react';
import AuthHelperService from '../../../services/AuthHelperService'

export default class RegForm extends React.Component {

    static defaultProps = {
        onRegistrationSuccess: () => { },
    }

    state = { error: null }

    handleSubmit = ev => {
        ev.preventDefault()
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
    }

    render() {
        return (
        <section>
            <form className='register-form' onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input placeholder='Full Name' type="text" name='name' id='name' required />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input placeholder='' type="text" name='age' id='age' />
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" name="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="username">Email</label>
                    <input type="text" name='user_name' id='user_name' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' />
                </div>
                <button type='submit'>Register</button>
            </form>
        </section>
        )
    }
}