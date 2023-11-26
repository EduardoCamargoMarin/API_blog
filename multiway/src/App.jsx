import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Message } from './components/Message';
import { Home } from './components/Home';
import { About } from './components/About'

const Inicio = () => <Home/>;
const Postagem = () => <Message />;
const Sobre = () => <About/>

function App() {
  return (
    //Rotas
    //============================================
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Message" element={<Postagem />} />
        <Route path="/about" element={<Sobre />} />
      </Routes>
    </Router>
    //===========================================

    

  );
}

export default App;
