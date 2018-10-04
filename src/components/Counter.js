import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC'

export class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <h2>{this.props.counter}</h2>
        <button onClick = {this.handleIncr}>Increment me</button>
      </div>
    )
  }
  handleIncr = () => {
    console.log('---', 'incrementing')
    const {increment} = this.props
    increment()
    // Выполнение деструктуризации
    //this.props.increment()
  }
}

export default connect((state) => ({
  counter: state.count
}), {increment})(Counter)

/* Расширенная версия с пояснениями export который выше

  function mapStateToProps(state) {
  return {
    counter: state.count
  }
}
const mapToDispath = {increment}
const decorator = connect(mapStateToProps, mapToDispath)
export default decorator(Counter)
 */
