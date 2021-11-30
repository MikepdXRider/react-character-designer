import React from 'react'
import Select from '../Select/Select.jsx'

export default function Selector({setHead, head, setTorso, torso, setBottom, bottom}) {
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
                    optionsArr={['cowboy', 'diaper', 'formal', 'jacket']}
                    setState={setTorso}
                    state={torso}
                />
            </label>
            <label>
                Bottom
                <Select
                    optionsArr={['cowboy', 'jean', 'skirt', 'suit']}
                    setState={setBottom}
                    state={bottom}
                />
            </label>
        </section>
    )
}
