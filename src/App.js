import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Acceuil from './views/Acceuil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Skills from './views/Skills';
import Parcour from './views/Parcour';



function App() {
  return (
    <div className="bg-black">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Acceuil}/>
          <Route path='/resume' Component={Skills}/>
          <Route path='/resume/parcour' Component={Parcour}/>
        </Routes>
      </BrowserRouter>
      <div className='w-full bg-slate-800 relative bottom-0 left-0 text-white text-center opacity-40'>
        ©2024 TIPMA Nick Loic. Tous droits réservés
      </div>
    </div>
  );
}

export default App;
