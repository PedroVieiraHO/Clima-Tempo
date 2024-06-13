import React from 'react';

const Semana = ({ diasTemp }) => {
  return (
    <div className="semana">
      {diasTemp.length > 0 ? (
        diasTemp.map((dia, index) => (
          <div key={index} className="dia-semana">
            <p>{new Date(dia.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long' })}</p>
            <p>{Math.round(dia.main.temp)}°C</p>
            <p>{dia.weather[0].description}</p>
          </div>
        ))
      ) : (
        <p>Carregando previsão...</p>
      )}
    </div>
  );
};

export default Semana;