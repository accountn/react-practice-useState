import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error))
  }, [])

  const handleAddToCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }
  return (
    <div className="App">
      <h1>Country info:{countries.length} </h1>
      <h3>Country Add: {cart.length}</h3>
      <Cart cart={cart}></Cart>

      {
        countries.map(country => <Country country={country} handleAddToCountry={handleAddToCountry} key={country.alpha3Code}></Country>)
      }
      <header className="App-header">

      </header>
    </div>
  );
}


export default App;
