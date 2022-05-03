import React from 'react';
import './styles/App.css';
import { BooleanQuestion } from './components/BooleanQuestion';
import { SentanceQuestion } from './components/SentanceQuestion';



function App() {
  return (
    <>
      <div className='main-menu-root'>
      <div className='card'>
      <div className='top pink-gradient'>
      <img className='image' src="/yesno.svg" alt="translate" />
      </div>
        <h1>Check si un palabra ta den papiamento</h1>
      </div>
      <div className='card'>
      <div className='top yellow-gradient'>
        <img className='image' src="/translate.svg" alt="translate" />
      </div>
        <h1>Traduci e palabra na Ingles</h1>
      </div>
      <div className='card'>
        <div className='top blue-gradient'>
        <img className='image-social' src="/social.svg" alt="translate" />
        </div>
        <h1>Informacion, vision y e mision.</h1>
      </div>
      
      </div>

    </>
  );
}
export default App;

