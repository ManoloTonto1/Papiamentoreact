import React,{useEffect,useRef,useState} from 'react';
import './styles/App.css';
import { BooleanQuestion } from './components/BooleanQuestion';
import {motion} from 'framer-motion';
import { db } from './db/Firebase';
import { doc, updateDoc, collection, getDocs, query, where } from "firebase/firestore";
import {RoundButton} from './components/RoundButton';
function SentanceQuestion(){
  const [chosenWord, setChosenword] = useState({ id: '', papiamento: "Cargando, Please warda."});

  //function to skip and to also get a docuement
  const getword = async () => {
    const max = 16571;
    const chosenNumber = Math.floor(Math.random() * max);
    const q = query(collection(db, "Papiamento-data"), where("id", "==", chosenNumber));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data().papiamento);
      setChosenword({ id: doc.data().id, papiamento: doc.data().papiamento, });
    });


  };
  const input = useRef(null);
  const submit = async () => {
    console.log(chosenWord);
    const ref = doc(db, "Papiamento-data", chosenWord.papiamento);

    await updateDoc(ref, {
      english:[input.current.value]
    }).then(() => getword());
  }
  useEffect(() => {
     const i = getword();
      i.catch(console.error);
  }, []);
  return(
        <>
        <RoundButton click={()=>console.log("hi")} />
      <div className='root'>
        <div className='header'>
          <span className='question'>Traduci e palabra of zin aki na Ingles:</span>
          <br />
          <br />
          <motion.span className='word'>{chosenWord.papiamento}</motion.span>
          <br/>
          <br/>
          <motion.input ref={input} type='text' placeholder='Typ e traduccion na ingles kiden' className='text-input'></motion.input>
        </div>
        <div className='button-div'>
          <motion.button
            className='green'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={submit}>Cla</motion.button>

          <motion.button
            className='yellow'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={getword}>Skip</motion.button>
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

