import React, { useEffect, useState } from 'react';
import './styles/App.css';
import {db} from './db/Firebase';
import { doc, updateDoc, collection, getDocs, query, where } from "firebase/firestore";
import { motion} from "framer-motion";




function BooleanQuestion() {

  const [chosenWord, setChosenword] = useState({id:'', papiamento:"Cargando, Please warda.",isPapiamento:0,isNotPapiamento:0});

  //function to skip and to also get a docuement
  const getword = async () => {
    const max = 16572;
    const chosenNumber = Math.floor(Math.random() * max);
    const q = query(collection(db, "Papiamento-data"), where("id", "==", chosenNumber));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data().papiamento);
      setChosenword({id:doc.data().id, papiamento: doc.data().papiamento,isPapiamento:doc.data().isPapiamento,isNotPapiamento:doc.data().isNotPapiamento})
    });
    

  }
  const setPapiamento = async () =>{
    console.log(chosenWord)
    const ref = doc(db, "Papiamento-data", chosenWord.papiamento);
    let number = chosenWord.isPapiamento + 1

    await updateDoc(ref, {
      isPapiamento:  number
    }).then(() => getword())

  }
  const setNotPapiamento = async () =>{
    const ref = doc(db, "Papiamento-data", chosenWord.papiamento);
    let number = chosenWord.isNotPapiamento + 1

    await updateDoc(ref, {
      isNotPapiamento: number
    }).then(() => getword())
    

  }


  useEffect(() => {
    const i = getword()
      i.catch(console.error)
  }, []);

  return (
    <>
      <div className='root'>
        <div className='header'>
          <span className='question'>E palabra of zin aki ta den papiamento?</span>
          <br />
          <br />
          <span className='word'>{chosenWord.papiamento}</span>
        </div>
        <div className='button-div'>
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
             onClick={setPapiamento}>Si</motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
             onClick={setNotPapiamento}>No</motion.button>
        </div>
        <div className='bottom-button-div'>
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
             onClick={getword}>Skip</motion.button>
        </div>
      </div>

    </>
  )
}

function App() {
  return (
    <>
      <BooleanQuestion />
    </>
  );
}
export default App;

