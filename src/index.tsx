import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';	
import { AnimatePresence } from 'framer-motion';
import { BooleanQuestion } from './components/BooleanQuestion';
import { SentanceQuestion } from './components/SentanceQuestion';
import Info from './components/Info';

const root = ReactDOM.createRoot(
  
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Rout />
  </Router>
);
function Rout(){
  const location = useLocation();
  return(
    
    <AnimatePresence exitBeforeEnter={true}>
      
      <Routes location={location} key={location.pathname}>
        {/* add all routes here*/}
        <Route path="/" element={<App/>} />
        <Route path="/si-of-no" element={<BooleanQuestion />} />
        <Route path="/traduci" element={<SentanceQuestion />} />
        <Route path="/info" element={<Info />} />

        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
      
    </AnimatePresence>
  
  )
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
