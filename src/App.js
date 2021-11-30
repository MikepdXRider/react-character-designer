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
  // newCatchphraseStr
  // catchPhraseListArr

  
/**
 * adds the newCatchphraseStr to the catchphraseListArr.
 * 
 */


/**
 * Updates Selector hooks.
 *
 * @param {text} type the type of hook to update.
 * @param {text} newValue the new value, used to update the hook.
 */

  return (
    <main className="App">
      {/* Selector component */}
      <Selector 
        setHead={setHead}
        head={head}
        setTorso={setTorso}
        torso={torso}
        />
      {/* Display component */}
      <Display
        head={head}
        torso={torso}
      />
    </main>
  );
}

export default App;
