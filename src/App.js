import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const name = 'Matias Llanos';
  const [is_female, setIs_female] = useState(true);

  const welcomeGender = () => {
    return is_female ? "Bienvenida" : "Bienvenido";
  };

  const handleClick = () => {
    setIs_female(!is_female);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>
          {welcomeGender()} a la página web de {name}
        </h3>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Holaa mundoo!
        </p>
        <button className="button" onClick={handleClick}>Cambiar Género</button>
      </header>
    </div>
  );
}

export default App;