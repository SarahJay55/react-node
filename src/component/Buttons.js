import React, { Componenet } from 'react'

export default function Buttons(props) {
    return (
        <div>
            
            <button onClick={() => props.changeImage(0)}>Oahu</button>
            <button onClick={() => props.changeImage(1)}>Hawaii</button>
            <button onClick={() => props.changeImage(2)}>Maui</button>
            <button onClick={() => props.changeImage(3)}>Kauai</button>

        </div>
    )
}