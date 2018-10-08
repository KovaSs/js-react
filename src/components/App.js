import React, {Component} from 'react';
import propTypes from 'prop-types'
import {HashRouter as Router, Route, NavLink} from 'react-router-dom'
import ArticleList from './ArticleList'
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
          <Route path='/counter' component={Counter}/>
          <Route path='/filters' component={Filters}/>
          <Route path='/articles' component={ArticleList}/>
        </div>
      </Router>
    )
  }
}

export default App