import React from 'react'
import TokenService from '../../../services/TokenService'
import AuthHelperService from '../../../services/AuthHelperService'
import { Link } from 'react-router-dom';

export default class LoginForm extends React.Component {
    static defaultProps = {
        onLoginSuccess: () => {this.props.history.push('/') }
    }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = ev.target
        const login = {
            user_name: user_name.value,
            password: password.value,
        }

        AuthHelperService.postLogin(JSON.stringify(login))
            .then(res => {
                TokenService.saveAuthToken(res.authToken)
                user_name.value = ''
                password.value = ''
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({ error: res.error })
                alert(JSON.stringify(this.state.error))
            })
    }

    render() {
        return (
            <section>
                <form
                className='Login-form'
                onSubmit={this.handleSubmitJwtAuth}
                >
                    <div>
                        <label for='user_name'>Email</label>
                        <input type='text' name='user_name' id='user_name' />
                    </div>
                    <div>
                        <label for='password'>Password</label>
                        <input type='password' name='password' id='password' />
                    </div>
                    <button type='submit'>Login</button>
                    <p>Don't have an account? Register <Link to={'/register'}>here.</Link></p>
                </form>
            </section>
        )
    }
}