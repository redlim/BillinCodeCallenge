import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from './Card';
import './cardContainerStyles.css';
import request from '../request';
import { ARTICLES_QUERY } from '../queries';

class CardContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }
  setLink(id) {
    return `card/${id}`;
  }
  cardList() {
    return this.state.articles.map(card => {
      const { id, title, excerpt, author } = card;
      return (<li key={id} className="card-item" ><Link to={this.setLink(id)}>
        <Card title={title} subtitle={author} content={excerpt} /></Link></li>);
    });
  }
  render() {
    return (
      <ul className="card-container">
        {this.cardList()}
      </ul>
    );
  }
}

CardContainer.propTypes = {
  cards: PropTypes.array,
};

export default CardContainer;
