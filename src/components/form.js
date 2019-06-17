import React from 'react';

const Form = props => (
    <form onSubmit={props.weatherMethod}>
        <input className="col-12 col-sm-7" type="text" name="city" placeholder="Город по-английски"/>
        <button className="col-12 col-sm-4">Узнать погоду</button>
    </form>
);

export default Form;