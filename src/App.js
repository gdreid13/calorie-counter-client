import React, {Component} from 'react'
import NavBar from './component/navBar/navBar';
import HomePage from './routes/homepage/homepage';
import LandingPage from './routes/landingpage/landingpage';
import RegistrationPage from './routes/regPage/regPage';
import FitnessTipsPage from './component/fitness/fitness';
import LoginPage from './routes/loginpage/loginpage';
import NotFoundPage from './component/notfoundpage/notfoundpage';
import Footer from './component/footer/footer';
import { Route, Switch } from 'react-router-dom'
import Navbar from './component/navBar/navBar'
import Footer from './component/footer/footer'
import HomePage from './routes/homepage/homepage'
import LandingPage from './routes/landingpage/landingpage'
import RegistrationPage from './routes/regPage/regPage'
import LoginPage from './routes/loginpage/loginpage'



export default class App extends Component {
  constructor() {
    super()
    this.state = {
      hasError: false,
    }
  }

  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <NavBar />
        </nav>
        <main className="App_main">
          {this.state.hasError &&
            <p className='red'>
              An unknown error has occurred.
          </p>}
          
            <Switch>
              <Route
                exact
                path={'/'}
                component={(props) => <LandingPage {...props}/>}
              />
              <Route
                path={'/home'}
                component={(props) => <HomePage {...props}/>}
              />
              <Route 
                path={'/register'}
                component={(props) => <RegistrationPage {...props}/>}
              />
              <Route 
                path={'/login'}
                component={(props) => <LoginPage {...props}/>}
              />
              <Route 
                path={'/fitnesstips'}
                component={(props) => <FitnessTipsPage {...props}/>}
              />
              <Route 
                component={(props) => <NotFoundPage {...props}/>}
              />
            </Switch>

        </main>
        <footer>
          <Footer />
        </footer>

      </div>
    )
  }

}

