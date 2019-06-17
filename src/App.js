import React from 'react';
import './App.css';
import Header from './components/header';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = '85b13f5691256d07b444452eaa28e562';

class App extends React.Component {

    state = {
        city: undefined,
        country: undefined,
        temp: undefined,
        error: undefined
    };

    gettingWeather = async (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;

        if (city) {
            const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const data = await api_url.json();

            this.setState({
                name: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                error: undefined
            })
        } else {
            this.setState({
                city: undefined,
                country: undefined,
                temp: undefined,
                error: "Введите название города"
            });
        }
    };

    render() {
        return (
            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 info">
                                <Header />
                            </div>
                            <div className="col-sm-7 form">
                                <Form weatherMethod={this.gettingWeather} />
                                <div className="weather">
                                    <Weather
                                        name={this.state.name}
                                        country={this.state.country}
                                        temp={this.state.temp}
                                        error={this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
