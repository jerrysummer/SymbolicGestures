import React, { Component } from 'react';

import DatePicker from 'react-datepicker';
import { Calendar } from 'react-date-range';

export default class componentName extends Component {

  constructor(props) {
    super(props);
    this.state = {
      someState: ''
    };
  }


  handleSelect(date) {
    console.log(typeof date._d); // Momentjs object
  }

  render() {
    return (
      <div>
        {/* <Calendar
          onInit={this.handleSelect}
          onChange={this.handleSelect}
        /> */}
      </div>
    );
  }
}
