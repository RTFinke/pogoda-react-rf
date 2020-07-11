import React from 'react';
import './WeatherBox.css';

export default class WeatherBox extends React.Component {
  // returns weekday to a given Date value
  getDay = date => {
    let weekday = new Array(7);
    weekday[0] = 'Niedziela';
    weekday[1] = 'Poniedzialek';
    weekday[2] = 'Wtorek';
    weekday[3] = 'Środa';
    weekday[4] = 'Czwartek';
    weekday[5] = 'Piątek';
    weekday[6] = 'Sobota';

    return weekday[new Date(date).getDay()];
  };

  render(props) {
    return (
      <div className='weather-box'>
        <h1>{this.props.date ? this.getDay(this.props.date) : ''}</h1>
        <img
          src={
            this.props.icon
              ? require(`../images/${this.props.icon}.svg`)
              : require('../images/01d.svg')
          }
          alt='sun'
        />
        <span className='temp'>{Math.round(this.props.temp - 273.15)}°C</span>
      </div>
    );
  }
}
