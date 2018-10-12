import React, { Component } from 'react';
import RequestButton from './requestButton'
import { get } from '../services/requestService'
import Invitation from './invitation'

class InvitationList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { invitations: [] };
  }

  componentDidMount() {
    let that = this;
    get('http://localhost:9292/invitations').then(function(response) {
      let invitations = response.data.invitations;
      if (invitations !== null) {
        that.setState({ invitations: invitations });
      } else {
        console.log(response.data);
      }
    });
  }

  render() {
    let invitations = this.state.invitations.map(function(invitation, i) {
      return <Invitation email_address={invitation['email_address']} viewed={invitation['viewed']} key={i} />
    });

    return <div>{invitations}</div>;
  }
}

export default InvitationList;
