import React from 'react';

const Country = (props) => {
    const {name, area, border, capital, population, flag} = props.country;
    const handleAddToCountry = props.handleAddToCountry;
    const flagStyle = {
        height: '100px'
    }
    const countryStyle = {
        border: '1px solid red',
        margin: '10px',
        padding: '10px'
    }
    return (
        <div style={countryStyle}>
            <h2>{name}</h2>
            <img  style={flagStyle} src={flag} alt=""/>
            <h3>{area}</h3>
            <h5>{population}</h5>
            <button onClick={() => handleAddToCountry(props.country)}>Add country</button>
        </div>
    );
};

export default Country;