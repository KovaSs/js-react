import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Router, Route, NavLink, Switch, Redirect} from 'react-router-dom'
import { ConnectedRouter} from 'react-router-redux'
import Articles from './routes/Articles'
import NotFoundPages from './routes/NotFoundPages'
import CommentsPage from './routes/CommentsPage'
import UserForm from './UserForm';
import history from '../history';
import Filters from './Filters';
import Counter from './Counter';
import 'react-select/dist/react-select.css';

class App extends Component {
  static propTypes = {

  }

  // Описали какого типа данные мы собираемся помещеать в контекст
  static childContextTypes = {
    user: PropTypes.string
  }

  // при каждом перестроении компонента будет вызываться
  getChildContext() {
    return {
      user: this.state.username
    }
  }

  state = {
    username: ''
  }


/*   state = {
    seclection: null
  } */

  render() {
    return (
      <ConnectedRouter history = {history}>
        <div>
          <div>
            <h2>Main menu</h2>
            <div><NavLink activeStyle = {{color:'red'}} to='/counter'>Counter</NavLink></div>
            <div><NavLink activeStyle = {{color:'red'}} to='/filters'>Filters</NavLink></div>
            <div><NavLink activeStyle = {{color:'red'}} to='/articles'>Articles</NavLink></div>
          </div>
          <UserForm value={this.state.username} onChange={this.handleUserChange}/>
          <Switch>
            <Route path='/counter' component={Counter}/>
            <Route path='/filters' component={Filters}/>
            <Route path='/articles' component={Articles}/>
            <Route path='/comments/' component={CommentsPage}/>
            {/* <Redirect from = '/comments/' to = '/comments/1'/> */}
            <Route path='*' component={NotFoundPages}/>
          </Switch>
        </div>
      </ConnectedRouter>
    )
  }

  handleUserChange = (username) => this.setState({username})
}

export default App