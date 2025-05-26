import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './commpnet/Card'


function App( ) {
    const message = "Hello, World!";
    const card = [
      {
      id: 1,
      title: "Card Title",
      Description: "This is a description of the card."
      },
      {
        id: 2,
        title: "Card Title",
        Description: "This is a description of the card."
        },
        {
          id: 3,
          title: "Card Title",
          Description: "This is a description of the card."
          },
          {
            id: 4,
            title: "Card Title",
            Description: "This is a description of the card."
            }

  ]
  return (
    <>
      <Card/>   
    </>
  )
}

export default App
