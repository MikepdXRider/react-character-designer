import React from 'react'

export default function Select({optionsArr, setState, state}) {
    // console.log('setState: ', setState);
    // console.log('optionsArr: ', optionsArr);
    return (
        <select value={state} onChange={(e) => setState(e.target.value)}>
            <option value="" disabled hidden>Please Choose...</option>
            {
                optionsArr.map(option => <option key={option} value={option} data-testid={option}>{option}</option>)
            }
        </select>
    )
}
