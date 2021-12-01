import React from 'react'
import Select from '../Select/Select.jsx'

export default function Selector({setHead, head, setTorso, torso, setBottom, bottom, newCatchPhraseStr, setNewCatchphraseStr, addCatchphrase}) {
    return (
        <section>
            <label>
                Head
                <Select
                    optionsArr={['cowboy', 'green', 'top', 'wizard']}
                    setState={setHead}
                    state={head}
                />
            </label>
            <label>
                Torso
                <Select
                    optionsArr={['cowboy', 'formal', 'jacket']}
                    setState={setTorso}
                    state={torso}
                />
            </label>
            <label>
                Bottom
                <Select
                    optionsArr={['cowboy', 'jean', 'diaper', 'skirt', 'suit']}
                    setState={setBottom}
                    state={bottom}
                />
            </label>
            <label>
                Catchphrase
                <input type="text" value={newCatchPhraseStr} onChange={(e) => setNewCatchphraseStr(e.target.value)} />
            </label>
            <button onClick={() => addCatchphrase()}>Add Catchphrase</button>
        </section>
    )
}
