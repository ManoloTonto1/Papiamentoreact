import React from 'react';
import './styles/App.css';
import { BooleanQuestion } from './components/BooleanQuestion';
import { SentanceQuestion } from './components/SentanceQuestion';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';



function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className='main-menu-root'>
      <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate('/si-of-no')}
      className='card'>
      <div className='top pink-gradient'>
      <img className='image' src="/yesno.svg" alt="translate" />
      </div>
        <h1>Check si un palabra ta den papiamento</h1>
      </motion.div>
      <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate('/traduci')}
      className='card'>
      <div className='top yellow-gradient'>
        <img className='image' src="/translate.svg" alt="translate" />
      </div>
        <h1>Traduci e palabra na Ingles</h1>
      </motion.div>
      <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className='card'>
        <div className='top blue-gradient'>
        <img className='image-social' src="/social.svg" alt="translate" />
        </div>
        <h1>Informacion, vision y e mision.</h1>
      </motion.div>
      
      </div>

    </>
  );
}
export default App;

