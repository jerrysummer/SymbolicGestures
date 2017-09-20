import React, { Component } from 'react';
import { Table, Form } from 'semantic-ui-react';

class TableCellJPSource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value });
  }

  handleSubmit(idx, updatedField, e) {
    this.props.updateOneKeyValPairInFE(idx, updatedField, this.state.userInput)
    e.preventDefault();
  }

  render() {
    if (this.props.job_posting_source.length !== 0) {
      return (<Table.Cell>{this.props.job_posting_source}</Table.Cell>);
    }
    return (
      <Table.Cell style={{ padding: '0.2% 0.2% 0px 0.2%', width: '10%' }}>
        <Form onSubmit={(e) => (this.handleSubmit(this.props.idx, 'job_posting_source', e))}>
          <Form.Field>
            <input onChange={this.handleChange} value={this.state.value} placeholder="Source" />
          </Form.Field>
        </Form>
      </Table.Cell>
    );
  }
}

export default TableCellJPSource;







