import React from 'react';
import './styles/App.css';
import './db/Firebase';

function BooleanQuestion({word} : {word: string}) {
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
    <BooleanQuestion word="bo mama"/>
    </>
  );
}
export default App;

