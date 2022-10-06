import './App.css'
import React from 'react'
import useGame from './useGame'

function App() {

  const [textBoxRef, text, setText, words,
        calculateWords, timer, setTimer,
        buttonText, setButtonText, gameStart,
        setGameStart, startGame] = useGame()

  const textExample = 'The road to success is not smooth but fraught with hurdles, unpredictability, dangers, and risk. The high risk of failure, especially with new initiatives, can dishearten the most spirited of people. Talent is never enough. With few exceptions, the best players are the hard workers. It is rightly said that Champions are not born, they are made. ⇡'

  const [sample, setSample] = React.useState('... ⇣')

  React.useEffect(() => {
    if(gameStart) {
      const Timeout = setTimeout(() => {
        setTimer(prevTimer => prevTimer - 1)
      }, 1000)
      if(timer === 0) {
        clearTimeout(Timeout)
        calculateWords(text)
        setButtonText("Let's Type!")
        setGameStart(false)
      }
    }
  }, [timer, gameStart])

  const colors = {
    color: gameStart ? '#FA7070' : '#000028'
  }

  function hangleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function changeSample() {
    setSample(prevSample => {
      return(
        prevSample === '... ⇣' ? prevSample = textExample : prevSample = '... ⇣'
      )
    })
  }

  return (
    <div className="App">

      <h1 className='title'>How fast can you type?</h1>

      <h4 className='text--display' style={colors}>time: {timer}</h4>
      

      <textarea className='text--area' 
        ref={textBoxRef} 
        onChange={hangleChange} 
        value={text} 
        disabled={!gameStart}
      />

      <button className='button'
       onClick={() => startGame(30)} 
       disabled={gameStart}
       >{buttonText}</button>

      <h4 className='text--display'>words: {words}</h4>

      <h4 className='text--display'>Don't know what to type? try this</h4>
      <p className='sample--text' onClick={() => changeSample()}>{sample}</p>

    </div>
  )
}

export default App
