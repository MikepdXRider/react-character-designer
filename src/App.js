import './App.css';
import { useState } from 'react';
import Selector from './components/Selector/Selector.jsx';
import Display from './components/Display/Display.jsx';

function App() {
// hooks here
  // headStr
  const [head, setHead] =  useState('');
  // torsoStr
  const [torso, setTorso] = useState('');
  // legsStr
  const [bottom, setBottom] = useState('');
  // newCatchphraseStr
  const [newCatchphraseStr, setNewCatchphraseStr] = useState('');
  // catchPhraseListArr
  const [catchphraseListArr, setCatchphraseListArr] = useState([]);
  

/**
 * adds the newCatchphraseStr to the catchphraseListArr.
 * 
 */
  const addCatchphrase = () => {
    setCatchphraseListArr((prevState) => [...prevState, newCatchphraseStr]);
  }

  return (
    <main className="App">
      {/* Selector component */}
      <Selector 
        setHead={setHead}
        head={head}
        setTorso={setTorso}
        torso={torso}
        setBottom={setBottom}
        bottom={bottom}
        newCatchphraseStr={newCatchphraseStr}
        setNewCatchphraseStr={setNewCatchphraseStr}
        addCatchphrase={addCatchphrase}
        />

      {/* Display component */}
      <Display
        head={head}
        torso={torso}
        bottom={bottom}
        catchphraseListArr={catchphraseListArr}
      />
    </main>
  );
}

export default App;
