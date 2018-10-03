import React, {Component} from 'react';
import propTypes from 'prop-types'
import Select from 'react-select';
import ArticleList from './ArticleList'
import UserForm from './UserForm';
import Filters from './Filters';
import 'react-select/dist/react-select.css';

class App extends Component {
  static propTypes = {

  }

  state = {
    seclection: null
  }

  render() {
    const {articles} = this.props
    return (
      <div>
        <UserForm/>
        <Filters articles = {articles}/>
        <ArticleList articles = {this.props.articles}/>
      </div>
    )
  }
}

export default App