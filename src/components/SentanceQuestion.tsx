import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '../db/Firebase';
import { doc, updateDoc, collection, getDocs, query, where } from "firebase/firestore";
import { RoundButton } from './RoundButton';
import { useNavigate } from 'react-router-dom';

export function SentanceQuestion() {
  const slidein = {
    hidden: {
      x: "-100vh",
      opacity: 0,
    },
    visible: {
      x: "-50%",
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        damping: 20,
        stiffness: 200,
      },
    },
    exit: {
      x: "-100vh",
      opacity: 0,
      transition: { duration: 0.5 }
    },
  };
  const [chosenWord, setChosenword] = useState({ id: '', papiamento: "Cargando, Please warda.", english: [] });
  const input = useRef(null);
  const navigate = useNavigate();

  const enterFunction = useCallback((event) => {
    if (event.keyCode == 13) {
      submit();

    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", enterFunction);

    return () => {
      document.removeEventListener("keydown", enterFunction);
    };
  }, [enterFunction]);
  //function to skip and to also get a docuement
  const getword = async () => {
    const max = 16571;
    const chosenNumber = Math.floor(Math.random() * max);
    //const chosenNumber = 1;
    const q = query(collection(db, "Papiamento-data"), where("id", "==", chosenNumber));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log();
      setChosenword({ id: doc.data().id, papiamento: doc.data().papiamento, english: doc.data().english });
    });


  };


  const submit = async () => {
    if (!input.current.value) {
      alert("Please enter a word");
      return;
    }
    const ref = doc(db, "Papiamento-data", chosenWord.papiamento);
    const data = chosenWord.english;
    data.push(input.current.value.toLowerCase());
    await updateDoc(ref, {
      english: data,
    }).then(() => {
      input.current.value = "";
      getword();
    });
  };

  useEffect(() => {
    const i = getword();
    i.catch(console.error);
  }, []);
  return (
    <>
      <RoundButton click={() => navigate('/si-of-no')} />
      <motion.div
        variants={slidein}
        initial="hidden"
        animate="visible"
        exit="exit"
        className='root'>
        <div className='header'>
          <span className='question'>Traduci e palabra of zin aki na Ingles:</span>
          <br />
          <br />
          <motion.span className='word'>{chosenWord.papiamento}</motion.span>
          <br />
          <br />
          <motion.input ref={input} type='text' placeholder='Typ e traduccion na ingles kiden' className='text-input'></motion.input>
        </div>
        <div className='button-div'>
          <motion.button
            type='submit'
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

      </motion.div>

    </>
  );
}
