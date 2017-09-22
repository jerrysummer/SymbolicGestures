import React from 'react'
import styles from './../../../styles/socialGraphStyles.css'
import PropTypes from 'prop-types'
import D3Funnel from 'd3-funnel';
import axios from 'axios'

export default class ApplicationsFunnelChart extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      someState: '',
    };
  }

  componentDidMount(){
    const data = [
      { label: 'Applied', value: 300 },
      { label: 'Phone Screen', value: 50 },
      { label: 'Tech Screen', value: 10 },
      { label: 'On Site ', value: 10 },
      { label: 'Offer', value: 2 },
    ];
    const options = {
      block:{
        dynamicHeight: true,
        minHeight: 15,
      },
    };
    axios.get('/api/applications')
      .then((applicationData) => {
        let applications = applicationData.data;
        let funnel = {};
        for (var i = 0; i < applications.length; i++) {
          funnel[applications[i].stage] = applications[i].stage + 1 || 1;
        }
        })

    const chart = new D3Funnel('#funnel');
    chart.draw(data, options);
  }
  render() {
    return (
      <div>
        <div id="funnel"></div>
        <h1>TEST MESSAGE</h1>
      </div>
    )
  }
}
