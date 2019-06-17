import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 className="header">Погода на сегодня</h1>
                <p className="description">Узнайте погоду за 1 минуту в интересующем Вас городе!</p>
            </div>
        );
    }
}

export default Header;