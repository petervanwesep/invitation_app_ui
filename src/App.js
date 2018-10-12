import React, { Component } from 'react';
import InvitationForm from './components/invitationForm';
import InvitationList from './components/invitationList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <InvitationForm />
          <InvitationList />
        </header>
      </div>
    );
  }
}

export default App;
