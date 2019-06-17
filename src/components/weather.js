import React from 'react';

const Weather = props => (
    <div>
        {props.temp &&
        <div className="details">
            <p>Город: {props.name}</p>
            <p>Страна: {props.country}</p>
            <p>Температура: {Math.round(props.temp - 273.15)}°C</p>
            <p>{props.error}</p>
        </div>
        }
        <p className="error">{props.error}</p>
    </div>
);

export default Weather;