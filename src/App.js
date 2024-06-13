import { useState, useEffect } from 'react';
import './App.css';
import Dia from './Componentes/Dia'
import Semana from './Componentes/Semana'
import Topo from './Componentes/Topo';

function App() {
  const [cidade, setCidade] = useState('São Paulo');
  const [temperatura, setTemperatura] = useState(null);
  const [descricao, setDescricao] = useState(null);
  const [previsao, setPrevisao] = useState([]);

  useEffect(() => {
    // Temperatura do dia
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&appid=c0b4d3b02efd630c39d5e511c41e4c17`)
      .then((resposta) => resposta.json())
      .then((dado) => {
        setTemperatura(Math.round(dado.main.temp));
        setDescricao(dado.weather[0].description);
      })
      .catch((erro) => {
        console.log(erro);
      });

    // Temperatura da semana
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&lang=pt_br&units=metric&appid=c0b4d3b02efd630c39d5e511c41e4c17`)
      .then((resposta) => resposta.json())
      .then((dado) => {
        const array = [];
        for (let i = 2; i <= dado.list.length; i += 8) {
          array.push(dado.list[i]);
        }
        setPrevisao(array);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, [cidade]);

  return (
    <div className="App">
      <Topo pegarCidade={setCidade} />
      <Dia municipio={cidade} temp={temperatura} desc={descricao}/>
      <Semana diasTemp={previsao} />
    </div>
  );
}

export default App;

