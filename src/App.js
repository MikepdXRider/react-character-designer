import './App.css';
import { useState } from 'react';
import Picker from './components/Picker/Picker.jsx';

function App() {
// hooks here
  // headStr
  const [head, setHead] =  useState('');
  // torsoStr
  // legsStr
  // newCatchphraseStr
  // catchPhraseListArr

  
/**
 * adds the newCatchphraseStr to the catchphraseListArr.
 * 
 */


/**
 * Updates picker hooks.
 *
 * @param {text} type the type of hook to update.
 * @param {text} newValue the new value, used to update the hook.
 */

  return (
    <main className="App">
      {/* Picker component */}
      <Picker 
        setHead={setHead}
      />
      {/* Display component */}
    </main>
  );
}

export default App;
