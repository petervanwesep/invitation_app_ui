import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import { post } from '../services/requestService';

class RequestButton extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      isLoading: false,
    };
  }

  handleClick() {
    this.setState({ isLoading: true }, () => {
      post(this.props.url).then((response) => {
        console.log(response);
        this.setState({ isLoading: false });
      }, (error) => {
        console.log(error);
        this.setState({ isLoading: false });
      });
    });
  }

  render() {
    const { isLoading } = this.state;

    return (
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? this.handleClick : null}
      >
        {isLoading ? this.props.loadingText : this.props.text}
      </Button>
    );
  }
}

export default RequestButton;
