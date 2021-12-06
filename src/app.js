import { React } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ToDo from './components/todo/todo.js';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Settings from './components/settings/settings';
import Login from './components/auth/Login.js';
import Auth from './components/auth/IsAuthorized.js'
import './scss/header.scss'
import './scss/form.scss'
import './scss/footer.scss'
function App() {

  return (
      <>
          <Router>
              <Login/>
              <Auth>
            <Header />
              <Switch>
                  {/* { Main Route /} */}
                  <Route exact path='/'>
                      <Auth>
                      <ToDo/>
                      </Auth>
                  </Route>
                  {/* {/ Route to Settings} */}
                  <Route path='/settings'>
                      <Settings/>
                  </Route>
              </Switch>
              </Auth>
            <Footer />
          </Router>
      </>
  );
}

export default App;