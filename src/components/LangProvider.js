import React, { Component } from 'react'
import PropTypes from 'prop-types'
import dictionaries from '../dictionaries'

export class LangProvider extends Component {
  // передается в props (language)
  static propTypes = {
    language: PropTypes.string
  }

  static childContextTypes = {
    dictionary: PropTypes.object
  }

  getChildContext(){
    return {
    dictionary: dictionaries[this.props.language]
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default LangProvider
