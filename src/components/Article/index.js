import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group'
import { connect } from 'react-redux'
import { deleteArticle, loadArticle } from '../../AC'
import CommentList from '../CommentList';
import Loader from '../Loader';
import './style.css'

class Article extends Component {
  static propTypes = {
    id: PropTypes.string,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
    // from connect
    article: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
    })
  }

  state = {
    updateIndex: 0,
    areCommentsOpen: false
}

  componentDidMount() {
    const { loadArticle, article, id} = this.props
    if(!article || !article.text && !article.loading) loadArticle(id)
  }

  render() {
    const {article, isOpen, toggleOpen} = this.props
    if(!article) return null
    // console.log('---', 'apdate article')
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        <button onClick={this.hanleDelete}>
          Delete article
        </button>
        <CSSTransitionGroup
          transitionName = 'article'
          transitionAppear
          transitionEnterTimeout = {300}
          transitionLeaveTimeout = {500}
          transitionAppearTimeout = {500}
          component = 'div'
        >
        {this.getBody()}
        </CSSTransitionGroup>
      </div>
    )
  }

  hanleDelete = () => {
    const { deleteArticle, article } = this.props
    deleteArticle(article.id)
    console.log('---', 'delete article')
  }

  getBody() {
    const {article, isOpen} = this.props
    if (!isOpen) return null
    if (article.loading) return <Loader/>
    return (
      <section>
        {article.text}
        <CommentList article={article} ref = {this.setCommentsRef} key = {this.state.updateIndex}/>
      </section>
    )
  }

  setCommentsRef = ref => {
  // console.log('---', ref)
  }
}

export default connect((state, ownProps) => ({
  article: state.articles.entities.get(ownProps.id)
}), {deleteArticle, loadArticle})(Article)