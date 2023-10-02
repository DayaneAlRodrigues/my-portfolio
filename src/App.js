import './App.css';
import { Contato } from './components/contato/Contato';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Portfolio } from './components/portfolio/Portfolio';
import { Skills } from './components/skills/Skills';
import { Sobre } from './components/sobre/Sobre';



function App() {
  
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Sobre/>
      <Skills/>
      <Portfolio/>
      <Contato/>
      <Footer/>
      
    </div>
  );
}

export default App;
