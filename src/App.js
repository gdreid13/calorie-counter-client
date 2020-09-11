import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './routes/landingpage/landingpage';
import HomePage from './routes/homepage/homepage';
import RegistrationPage from './routes/regPage/regPage';
import FitnessTipsPage from './component/fitness/fitness';
import LoginPage from './component/forms/loginform/loginform';
import NotFoundPage from './component/notfoundpage/notfoundpage';
import Navbar from './component/navBar/navBar';
import Footer from './component/footer/footer';



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <Navbar />
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
              component={(props) => <LandingPage {...props} />}
            />
            <Route
              path={'/home'}
              component={(props) => <HomePage {...props} />}
            />
            <Route
              path={'/register'}
              component={(props) => <RegistrationPage {...props} />}
            />
            <Route
              path={'/login'}
              component={(props) => <LoginPage {...props} />}
            />
            <Route
              path={'/fitnesstips'}
              component={(props) => <FitnessTipsPage {...props} />}
            />
            <Route
              component={(props) => <NotFoundPage {...props} />}
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



