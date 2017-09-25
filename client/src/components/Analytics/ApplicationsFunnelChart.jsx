import React from 'react'
import styles from './../../../styles/jerryStyleBox.css'
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

    axios.get('/api/applications')
      .then((applications) => {
        let stages = []
        applications.data.forEach((application) => stages.push(application.stage));
        return stages
      })
      .then((data) => {
        let storage = {};
        data.forEach((stage) => {
          storage[stage] = storage[stage] + 1 || 1;
        })
        return storage;
      })
      .then((data) => {
        let converted = [];
        for(let key in data) {
          let temp = {};
          temp['label'] = key;
          temp['value'] = data[key];
          converted.push(temp);
        }
        return converted
      })
      .then((data) => {
        const fakeData = [
          { label: 'Applied', value: 300 },
          { label: 'Phone Screen', value: 50 },
          { label: 'Tech Screen', value: 10 },
          { label: 'On Site ', value: 3 },
          { label: 'Offer', value: 1 },
        ];
        const options = {
          block:{
            dynamicHeight: true,
            minHeight: 15,
            highlight: true
          },
          chart:{
            width: 600,
          }
        };
        const chart = new D3Funnel('#funnel');
        chart.draw(data, options);
      })

  }
  render() {
    return (
      <div>
        <div id="funnel">
        </div>
      </div>
    )
  }
}
