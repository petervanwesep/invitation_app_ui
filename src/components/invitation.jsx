import React, { Component } from 'react';

class Invitation extends React.Component {
  constructor(props, context) {
    console.log(props);
    super(props, context);
  }

  render() {
    return <div>
        {this.props['email_address']} --> {this.props['viewed']}
      </div>
  }
}

export default Invitation;


