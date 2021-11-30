import React from 'react'
import Select from '../Select/Select.jsx'

export default function Selector({setHead, head}) {
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
        </section>
    )
}
