import React, { useState } from "react";
import "./App.css"; // Importar el archivo de estilos

function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    if (contador < 25) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > -25) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="container">
      <h1>Contador Incremental y Decremental</h1>
      <h2>{contador}</h2>
      <div>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
      </div>
      <footer>
        <p>Creado por: <strong>Jefferson Perez, (000150191))</strong></p>
      </footer>
    </div>
  );
}

export default App;
