import React, { Component } from 'react';
import request from '../request';
import PropTypes from 'prop-types';
import { GET_ARTICLE_BY_ID } from '../queries';
import Card from './Card';
import './cardViewerStyles.css';

class CardViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentArticle: {},
      articleId: props.match.params.id,
    };
  }
  componentWillMount() {
    request(GET_ARTICLE_BY_ID(this.state.articleId)).then(response => {
      console.log(response);
      this.setState({ currentArticle: response.data.articles[0] });
    });
  }
  render() {
    const { title, excerpt, author } = this.state.currentArticle;
    return (
      <div className="card-viewer">
        <div className="card-item">
          <Card title={title} subtitle={author} content={excerpt} />
        </div>
      </div>
    );
  }
}

CardViewer.propTypes = {
  match: PropTypes.object,
};


export default CardViewer;
