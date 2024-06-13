import React from 'react';

const Topo = ({ pegarCidade }) => {
  const handleChange = (e) => {
    pegarCidade(e.target.value);
  };

  return (
    <header>
      <h1>Previsão do Tempo</h1>
      <input type="text" placeholder="Digite a cidade" onChange={handleChange} />
    </header>
  );
};

export default Topo;
