import React from 'react';
import './App.css'
import Dice from './dice'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {

  const [dice, setDice] = React.useState(NewDice())

  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allValue = dice.every(die => die.value === firstValue)
    if(allHeld && allValue) {
      setTenzies(true)
    } 
  }, [dice])


  function NewDice() {

    const DiceArray = []

    for(let i = 0; i < 10; i++) {
      let randomDice = Math.ceil(Math.random() * 6);
      DiceArray.push({value: randomDice, isHeld: false, id: nanoid()})
      }

    return DiceArray

}



const diceElements = dice.map(die => <Dice 
  key={die.id} 
  number={die.value} 
  isHeld={die.isHeld} 
  onClick={() => holdDice(die.id)}
  />)


function rollDice() {
  if(!tenzies){
  setDice(oldDice => {
    return(
      oldDice.map(die => {
        return !die.isHeld ? 
        {...die, value: Math.ceil(Math.random() * 6)} :
        die
      })
    )
  })} else {
    setTenzies(false)
    setDice(NewDice())
  }
}

function holdDice(id) {
  setDice(oldDice => {
    return(
      oldDice.map(die => {
        return die.id === id ? 
        {...die, isHeld: !die.isHeld} :
        die
      })
    )
  })
}

const buttonText = 
tenzies ? 'You Won! Again?' : 'Roll'


  return (
    <section className='game--container'>
      {tenzies && <Confetti />  }
      <div className='game'>

        <div className='text--box'>
          <h1>Let's play TENZI 🎲</h1>
          <p>Roll the dice untill all are the same. <br></br> 
          Click on a die to keep it.<br></br>
          Good luck 🌟</p>
        </div>

          <div className='dice--grid'>
            {diceElements}
          </div>
  
      <div className='button--box'>
        <button className='roll--button' onClick={rollDice}>{buttonText}</button>
      </div>

      </div>
    </section>
  )
}

export default App
