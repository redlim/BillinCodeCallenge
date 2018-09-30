import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './cardStyles.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src="https://picsum.photos/400/400/?random" alt="Avatar" />
        <div className="container">
          <h4><b>{this.props.title}</b></h4>
          <p>{this.props.subtitle}</p>
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Card;
