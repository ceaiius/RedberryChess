import React from 'react'
import image from "../assets/crown.svg"
export default function Header() {
  return (
    <div>
        <header>
            <img src={image} />
            <h1>Redberry Knight Cup</h1>
        </header>
    </div>
  )
}
