import React from 'react';

class AppDrawerNoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          {this.props.application.notes.map((note,index) => {
            return (
              <p key={index}>{note.type + '    ' + note.note }</p>
            );
          })}
        </div>

      </div>
    );
  }
}

export default AppDrawerNoteItem;
