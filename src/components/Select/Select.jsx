import React from 'react'

export default function Select(optionsArr, setState) {
    return (
        <select onChange={(e) => setState(e.target.value)}>
            {
                optionsArr.map(option => <option key={option} value={option}>{option}</option>)
            }
        </select>
    )
}
