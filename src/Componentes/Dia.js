import React from 'react';

const Dia = ({ municipio, temp, desc}) => {
  return (
    <div className="dia">
      <h2>{municipio}</h2>
      <p>{temp ? `${temp}°C` : 'Carregando...'}</p>
      <p>{desc}</p>
    </div>
  );
};

export default Dia;
