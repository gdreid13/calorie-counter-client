import React from 'react';
import TokenService from '../../../services/TokenService';
import AuthHelperService from '../../../services/AuthHelperService';
import { GeneralApiServices } from '../../../services/api-service'
import { Link } from 'react-router-dom';
import './loginform-style.css';

export default class LoginForm extends React.Component {
	static defaultProps = {
		onLoginSuccess: () => {
			this.props.history.push('/');
		}
	};

	state = {
		userList: [],
		error: null,
		displayForm: 1,
		usernamMessage: '',
		passwordMessage: ''
	};

	componentDidMount() {
		GeneralApiServices.getAllItems('users').then(json => {
			this.setState({ userList: json })
		})
	}

	handleSubmitJwtAuth = (ev) => {
		ev.preventDefault();
		//console.log('form submitted');
		this.setState({ error: null });
		const { user_name, password } = ev.target;
		const login = {
			user_name: user_name.value,
			password: password.value
		};

		AuthHelperService.postLogin(JSON.stringify(login))
			.then((res) => {
				TokenService.saveAuthToken(res.authToken);
				user_name.value = '';
				password.value = '';
				this.props.onLoginSuccess();
			})
			.catch((res) => {
				this.setState({ error: res.message });
				//alert(JSON.stringify(this.state.error));
			});
	};

	handleLoginReady = () => this.setState({ displayForm: 1, usernameMessage: '', passwordMessage: '' });
	handleForgotUsernameClicked = () => this.setState({ displayForm: 2 });
	handleForgotPasswordClicked = () => this.setState({ displayForm: 3 });

	handleForgotUsernameSubmitted = (e) => {
		e.preventDefault();
		const { full_name, age } = e.target;
		const full = full_name.value.toLowerCase();
		const user = this.state.userList.find((u) => {
			const full_name = u.full_name.toLowerCase();
			return full_name === full && Number(u.age) === Number(age.value);
		});
		const message = user
			? `Hooray, we found you. Your username is ${user.user_name}`
			: `Sorry, we cound not find your information. Please try it again!`;
		this.setState({ usernameMessage: message });
	};
	handleForgotPasswordSubmitted = (e) => {
		e.preventDefault();
		this.setState({ passwordMessage: `Your password has been reset and sent to your email on file.` });
	};
	renderForgotUserNameForm() {
		const message = this.state.usernameMessage ? <div className="message">{this.state.usernameMessage}</div> : '';
		return (
			<main className="forgotUser_holder">
				<h3>Let's get you back on track!</h3>
				<form className="form" onSubmit={this.handleForgotUsernameSubmitted}>
					<div>
						<label htmlFor="name">*empty*</label>
						<input className='name_input' placeholder="First Name" type="text" name="full_name" id="name" />
					</div>
					<div>
						<label htmlFor="age">*empty*</label>
						<input className='name_input' placeholder="Age" type="number" name="age" id="age" />
					</div>
					{message}
					<div className="form_control">
						<button className="login__button" type="button" onClick={this.handleLoginReady}>
							Back
					</button><br></br>
						<button className="login__button" type="submit">Submit</button>
					</div>
				</form>
			</main>
		);
	}
	renderForgotPasswordForm() {
		const { passwordMessage } = this.state;
		//const boolean= (passwordMessage)? true: false
		const message = passwordMessage ? <div className="message">{passwordMessage}</div> : '';
		return (
			<main className="forgotPass_holder">
				<h3>Let's get you back on track!</h3>
				<form className="form" onSubmit={this.handleForgotPasswordSubmitted} >
					<div>
						<label htmlFor="user_name">*empty*</label>
						<input className='username_input' type="text" placeholder="Username" name="user_name" id="user_name" />
					</div>

					{message}
					<div className="forgot_pass_buttons">
						<button className="login__button" type="button" onClick={this.handleLoginReady}>
							Back
					</button>
					</div>

					<div>
						<button className="login__button" type="submit" disabled={passwordMessage}>
							Reset Password
					</button>
					</div>

				</form>
			</main>
		);
	}

	renderLoginForm() {
		return (
			<main className="login_holder">

				<h3>Sign in continue tracking!</h3>

				<form className="Login-form" onSubmit={this.handleSubmitJwtAuth}>

					<div>
						<label htmlFor="user_name">*empty*</label>
						<input className='username_input' required type="text" name="user_name" id="user_name" placeholder="Username" />
					</div>

					<div>
						<label htmlFor="password">*empty*</label>
						<input className='password_input' required type="password" name="password" id="password" placeholder="Password" autoComplete="off" />
					</div>

					<div className="displayPassword">
						<input
							type="checkbox"
							id="togglePassword"
							onClick={() => {
								const password = document.getElementById('password');
								if (password.type === 'password') password.type = 'text';
								else password.type = 'password';
							}}
						/>
						<label className="showpass" htmlFor="togglePassword"> Show Password</label>
					</div>

					<div className="login__help">
						<span className="forgot__user" onClick={this.handleForgotUsernameClicked}>Forgot Username</span>
						{' | '}
						<span className="forgot__pass" onClick={this.handleForgotPasswordClicked}>Forgot Password</span>
						{' | '}
						<Link className="login__reg" to={'/register'}>Register</Link>
					</div>

					<button className="login__button" type="submit">Login</button>

				</form>
			</main>
		);
	}
	// 
	render() {
		const { error, displayForm } = this.state;
		const form =
			displayForm === 1
				? this.renderLoginForm()
				: displayForm === 2
					? this.renderForgotUserNameForm()
					: displayForm === 3 ? this.renderForgotPasswordForm() : '';
		return (
			<div id="help-me-login">
				{form}
				{error && <p>{error}</p>}
			</div>
		);
	}
}
