import './App.css';
import Logo from './componentes/Logo'
import IconesHeader from './componentes/IconesHeader';
import OpcoesHeader from './componentes/OpcoesHeader';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <IconesHeader></IconesHeader>
      </header>
    </div>
  );
}

export default App;