import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Time from './Componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#d9f7e9',
      corSecundaria: '#57c278'
    },
    {
      nome: 'front-End',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157'
    },
    {
      nome: 'Devops',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
      nomeDosTimes={times.map(time => time.nome)}
      aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(cadaTimeNaLista => <Time key={cadaTimeNaLista.nome}
        NomeDoTime={cadaTimeNaLista.nome}
        corPrimaria={cadaTimeNaLista.corPrimaria}
        corSecundaria={cadaTimeNaLista.corSecundaria}
        colaboradores={colaboradores.filter (colaborador => colaborador.time === cadaTimeNaLista.nome)} />)}
        
    </div>
  );
}

export default App;
