import React from 'react';
import './styles/App.css';
import {db} from './db/Firebase';
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

async function getinfo() {
  const collectionRef = await collection("", 'papiamento');
  const docSnap = await getDocs(collectionRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}
function BooleanQuestion({ word }: { word: string }) {

  getinfo();
  return (
    <>
      <div>
        <div>
          <span>Is this Word or Sentence in Papiamento?</span>
          <br />
          <span>{word}</span>
        </div>
        <div>
          <button>Yes</button>
          <button>NO</button>
        </div>
        <div>
          <button>Skip</button>
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

