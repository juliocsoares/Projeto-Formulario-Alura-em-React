import Banner from './Componentes/Banner';
import CampoTexto from './Componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome"    placeholder="nome"/>
      <CampoTexto label="Cargo"   placeholder="cargo"/>
      <CampoTexto label="Imagem"  placeholder="endereço da imagem"/>
    </div>
  );
}

export default App;
