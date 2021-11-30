import React from 'react'
import Select from '../Select/Select.jsx'

export default function Picker({setHead}) {
    return (
        <section>
            <label>
                Head
                <Select
                    optionsArr={['cowboy', 'green', 'top', 'wizard']}
                    setState={setHead}
                />
            </label>
        </section>
    )
}
