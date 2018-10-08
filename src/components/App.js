import React, {Component} from 'react';
import propTypes from 'prop-types'
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
import Articles from './routes/Articles'
import NotFoundPages from './routes/NotFoundPages'
import CommentsPage from './routes/CommentsPage'
import UserForm from './UserForm';
import Filters from './Filters';
import Counter from './Counter';
import 'react-select/dist/react-select.css';

class App extends Component {
  static propTypes = {

  }

  state = {
    seclection: null
  }

  render() {
    return (
      <Router>
        <div>
          <div>
            <h2>Main menu</h2>
            <div><NavLink activeStyle = {{color:'red'}} to='/counter'>Counter</NavLink></div>
            <div><NavLink activeStyle = {{color:'red'}} to='/filters'>Filters</NavLink></div>
            <div><NavLink activeStyle = {{color:'red'}} to='/articles'>Articles</NavLink></div>
          </div>
          <UserForm/>
          <Switch>
            <Route path='/counter' component={Counter}/>
            <Route path='/filters' component={Filters}/>
            <Route path='/articles' component={Articles}/>
            <Route path='/comments/:page' component={CommentsPage}/>
            <Route path='*' component={NotFoundPages}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App