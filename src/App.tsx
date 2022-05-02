import React,{useEffect,useState} from 'react';
import './styles/App.css';
import { BooleanQuestion } from './components/BooleanQuestion';
import {motion} from 'framer-motion';
import { db } from './db/Firebase';
import { doc, updateDoc, collection, getDocs, query, where } from "firebase/firestore";
function SentanceQuestion(){
  const [chosenWord, setChosenword] = useState({ id: '', papiamento: "Cargando, Please warda.", isPapiamento: 0, isNotPapiamento: 0 });

  //function to skip and to also get a docuement
  const getword = async () => {
    const max = 16571;
    const chosenNumber = Math.floor(Math.random() * max);
    const q = query(collection(db, "Papiamento-data"), where("id", "==", chosenNumber));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data().papiamento);
      setChosenword({ id: doc.data().id, papiamento: doc.data().papiamento, isPapiamento: doc.data().isPapiamento, isNotPapiamento: doc.data().isNotPapiamento });
    });


  };
  const submit = async () => {

  }
  useEffect(() => {
    // const i = getword();
    // i.catch(console.error);
  }, []);
  return(
        <>
      <div className='root'>
        <div className='header'>
          <span className='question'>Traduci e palabra of zin aki na Ingles</span>
          <br />
          <br />
          <motion.span className='word'>bo mama ta super bunita</motion.span>
          <br/>
          <br/>
          <motion.input type='text' className='text-input'>{}</motion.input>
        </div>
        <div className='button-div'>
          <motion.button
            className='green'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={()=>console.log("cla")}>Cla</motion.button>

          <motion.button
            className='yellow'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={()=>console.log("cla")}>Skip</motion.button>
        </div>

      </div>

    </>
  );
}



function App() {
  return (
    <>
      <SentanceQuestion/>
    </>
  );
}
export default App;

