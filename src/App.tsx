import React, { useEffect, useState } from 'react';
import './styles/App.css';
import {db} from './db/Firebase';
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { motion} from "framer-motion";




function BooleanQuestion({ word }: { word: string }) {
  function chooseWord() : string{
  
    const chosenWord = arrayofDocs[Math.floor(Math.random() * arrayofDocs.length)];

    return chosenWord;
  }
  const [arrayofDocs, setArrayofDocs] = useState([]);
  const [chosenWord, setChosenword] = useState(null);
  useEffect(()=>{
    const getInfo = async () => {
      let arrayOfDocs : any = [];
      const querySnapshot = await getDocs(collection(db, "Papiamento-data"));
      querySnapshot.forEach((doc) => {
        arrayOfDocs.push(doc.data());
      });
      
      setChosenword(arrayOfDocs[Math.floor(Math.random() * arrayOfDocs.length)].papiamento);
    }

    getInfo()
      .catch(console.error)
  },[]);

  return (
    <>
      <div className='root'>
        <div className='header'>
          <span className='question'>E palabra of zin aki ta den papiamento?</span>
          <br />
          <br />
          <span className='word'>{chosenWord}</span>
        </div>
        <div className='button-div'>
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
             onClick={()=>console.log("yes")}>Si</motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
             onClick={()=>console.log("no")}>No</motion.button>
        </div>
        <div className='bottom-button-div'>
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
             onClick={()=>console.log("skip")}>Skip</motion.button>
        </div>
      </div>

    </>
  )
}

function App() {
  return (
    <>
      <BooleanQuestion word="bo mama" />
    </>
  );
}
export default App;

