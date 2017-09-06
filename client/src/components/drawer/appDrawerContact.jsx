import React from 'react';
import AppDrawerContactItem from './appDrawerContactItem.jsx'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';


class AppDrawerContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: '',
      email: '',
      role: '',
      phone: ''
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  };

//close the dialog box, erases existing value in the fields
  handleClose() {
    this.setState({open: false});
    this.setState({
      name: '',
      email: '',
      role: '',
      phone: ''
    })
  };

// handle input change for all 4 fields, get id from event and change corresponding state value
  handleChange(event) {
    var key = event.target.id;
    var val = event.target.value;
    var obj  = {};
    obj[key] = val;
    this.setState(obj);
    // console.log('need to pass this to server', this.state);
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <h2>AppDrawerContact</h2>
        <div>
          <RaisedButton label="Add Contact" onClick={this.handleOpen} primary={true}/>
          <Dialog
            title="Enter Contact Info"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            Subtext
            <div>
              <TextField
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
                floatingLabelText="name"
              /> <br />
              <TextField
                id="role"
                value={this.state.role}
                onChange={this.handleChange}
                floatingLabelText="role"
              /> <br />
              <TextField
                id="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                floatingLabelText="phone"
              /> <br />
              <TextField
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
                floatingLabelText="email"
              />
            </div>

          </Dialog>
        </div>

        {this.props.application.contacts.map((contact,index) => {
          return (
            <AppDrawerContactItem contact={contact} key={index}/>
          );
        })}


      </div>
    );
  }
}

export default AppDrawerContact;
