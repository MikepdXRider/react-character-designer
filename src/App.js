import './App.css';
import { useState } from 'react';
import UserInput from './components/UserInput/UserInput.jsx';
import Display from './components/Display/Display.jsx';

function App() {
// hooks here
  // headStr
  const [head, setHead] =  useState('cowboy-hat');
  // torsoStr
  const [torso, setTorso] = useState('cowboy-torso');
  // legsStr
  const [bottom, setBottom] = useState('cowboy-bottom');
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
      {/* UserInput component */}
      <UserInput 
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
        stateArr={[head, torso, bottom]}
        catchphraseListArr={catchphraseListArr}
      />
    </main>
  );
}

export default App;
