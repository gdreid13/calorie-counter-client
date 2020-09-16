import React from 'react'
import TokenService from '../../../services/TokenService'
import AuthHelperService from '../../../services/AuthHelperService'
import { Link } from 'react-router-dom';
import './loginform-style.css'

export default class LoginForm extends React.Component {
    static defaultProps = {
        onLoginSuccess: () => {this.props.history.push('/') }
    }

    state={
        userList:[],
        error: null,
        displayForm:1,
        usernamMessage:'',
        passwordMessage:'',
    }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        console.log('form submitted')
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

    handleLoginReady=()=>this.setState({displayForm:1, usernameMessage:'',passwordMessage:''})
    handleForgotUsernameClicked=()=>this.setState({displayForm:2})
    handleForgotPasswordClicked=()=>this.setState({displayForm:3})

    handleForgotUsernameSubmitted=(e)=>{
        e.preventDefault()
        const {full_name,age}= e.target
        const full= full_name.value.toLowerCase()
        const user= this.state.userList.find(u=>{
            const full_name= u.full_name.toLowerCase()
            return full_name===full &&  u.age===Number(age.value)   
        })
        const message= (user)? `Hooray, we found you. Your username is ${user.username}`
                            : `Sorry, we cound not find your information. Please try it again!`
        this.setState({usernameMessage: message})
    }
    handleForgotPasswordSubmitted=(e)=>{
        e.preventDefault()
        this.setState({passwordMessage:`Your password has been reset and sent to your email on file.`})
    }
    renderForgotUserNameForm(){
        const message= (this.state.usernameMessage)? <span className='error'>{this.state.usernameMessage}</span>: ''
        return(
        <form className='form' onSubmit={this.handleForgotUsernameSubmitted}>
            <h3>Let's help find your username</h3>
            <div>
            <header>Full name:</header>
            <input type='text'name='full_name'></input>
            <header>Age:</header>
            <input type='number' name='age'></input>
            </div>
            {message}
            <div className='form_control'>
            <button type='button'onClick={this.handleLoginReady}>Go back</button>
            <button type='submit'>Find me</button>
            </div>
        </form>
        )
    }
  renderForgotPasswordForm(){
    const {passwordMessage}= this.state
    //const boolean= (passwordMessage)? true: false
    const message= (passwordMessage)? <span className='error'>{passwordMessage}</span>: ''
    return (
      <form className='form' onSubmit={this.handleForgotPasswordSubmitted}>
          <h3>Reset your password</h3>
          <div>
            <header>Enter your username/email:</header>
            <input type='text'name='username'></input>
          </div>
          {message}
          <div className='form_control'>
          <button type='button'onClick={this.handleLoginReady}>Go back</button>
          <button type='submit' disabled={passwordMessage}>Reset password</button>
        </div>
      </form>
    )
  }

    renderLoginForm(){
        return (
            <form className='form Login-form' onSubmit={this.handleSubmitJwtAuth}>
                <div>
                    <input required type='text' name='user_name' id='user_name' placeholder='User name'/>
                </div>
                <div>
                    <input required type='password' name='password' id='password' placeholder='password'/>
                </div>
                <div className='displayPassword'>
                    <input type="checkbox" id="togglePassword"
                    onClick={()=>{
                        const password= document.getElementById('password')
                        if(password.type==='password') password.type='text'
                        else password.type='password'
                    }}
                    />
                    <label htmlFor="togglePassword">show password</label> 
                </div>
                <div className='form_help'>
                    <span onClick={this.handleForgotUsernameClicked}>Forgot username</span>{' | '}
                    <span onClick={this.handleForgotPasswordClicked}>Forgot password</span>{' | '}
                    <Link to={'/register'}>Register</Link>

                </div>
                <div className='form_control'>
                    <button type='submit'>Login</button>
                </div>
            </form>         
        )
    }

    render() {
        
        const { error,displayForm } = this.state
        const form = (displayForm===1)? this.renderLoginForm()
            : (displayForm===2)? this.renderForgotUserNameForm()
            : (displayForm===3)? this.renderForgotPasswordForm(): ''
        return (
        <div id='help-me-login'>
            <div role='alert'>
                {error && <p className='error'>{error}</p>}
            </div>
            {form}
        </div>
        )      
    }
}