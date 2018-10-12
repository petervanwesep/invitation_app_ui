import React, { Component } from 'react';
import RequestButton from './requestButton';
import InvitationList from './invitationList';
import Form from 'react-bootstrap/lib/Form'
import FormControl from 'react-bootstrap/lib/FormControl'

class InvitationForm extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Form>
        <FormControl size="sm" type="text" placeholder="Email Address" />
        <RequestButton loadingText='Inviting…' text='Invite' url='http://localhost:9292/invitations' />
      </Form>
    );
  }
}

export default InvitationForm;


