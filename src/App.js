import React from 'react'
import { Route, Switch } from 'react-router-dom'

//add some thing
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
                path={'/meals'}
                component={(props) => <MealsPage {...props}/>}
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

export default App;
