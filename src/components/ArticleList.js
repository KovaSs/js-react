import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {filtratedArticleSelector} from '../selectors'
import {loadArticles} from '../AC'
import Loader from './Loader'

class ArticleList extends Component{

  componentDidMount() {
    const {loaded, loading, loadArticles} = this.props
    if (!loaded && !loading) loadArticles()
  }

  render() {
    const {articles, loading} = this.props
    if (loading) return <Loader />
    const articleElements = articles.map(article => <li key={article.id}>
        {/* Рендеринг всего перечня статей и комментариев ▼
          <Article 
          article = {article}
          isOpen = {article.id === openItemId}
          toggleOpen = {toggleOpenItem(article.id)}
        /> 
          Рендеринг названия статей ▼*/}
        <NavLink to={`/articles/${article.id}`} activeStyle = {{color:'red'}}>
          {article.title}
        </NavLink>
      </li>)
    return (
      <ul>
        {articleElements}
      </ul> 
    )
  }
}



export default connect((state) => {
  return {
    articles: filtratedArticleSelector(state),
    loading: state.articles.loading,
    loaded: state.articles.loaded
  }
}, {loadArticles})(ArticleList)

// export default connect(({articles}) => ({articles}))(accordion(ArticleList))

  