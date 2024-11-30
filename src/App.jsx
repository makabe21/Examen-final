import React, { useState } from "react";

function App() {
  // Estado para el contador
  const [contador, setContador] = useState(0);

  // Funciones para incrementar y decrementar
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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contador Incremental y Decremental</h1>
      <h2>Valor actual: {contador}</h2>
      <div>
        <button onClick={incrementar} style={{ margin: "10px", padding: "10px 20px" }}>
          Incrementar
        </button>
        <button onClick={decrementar} style={{ margin: "10px", padding: "10px 20px" }}>
          Decrementar
        </button>
      </div>
      <footer style={{ marginTop: "50px" }}>
        <p>
          Creado por: <strong> Jefferson Perez, (000150191)</strong>
        </p>
      </footer>
    </div>
  );
}

export default App;
