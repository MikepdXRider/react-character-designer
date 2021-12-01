import React from 'react'
import Select from '../Select/Select.jsx'

export default function UserInput({setHead, head, setTorso, torso, setBottom, bottom, newCatchPhraseStr, setNewCatchphraseStr, addCatchphrase}) {
    return (
        <section>
            <label>
                Head
                <Select
                    optionsArr={['cowboy-hat', 'green-hat', 'top-hat', 'wizard-hat']}
                    setState={setHead}
                    state={head}
                />
            </label>
            <label>
                Torso
                <Select
                    optionsArr={['cowboy-torso', 'formal-torso', 'jacket-torso']}
                    setState={setTorso}
                    state={torso}
                />
            </label>
            <label>
                Bottom
                <Select
                    optionsArr={['cowboy-bottom', 'jean-bottom', 'diaper-bottom', 'skirt-bottom', 'suit-bottom']}
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
