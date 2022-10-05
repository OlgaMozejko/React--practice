import './App.css'
import React from 'react'

function App() {

  const textExample = 'The road to success is not smooth but fraught with hurdles, unpredictability, dangers, and risk. The high risk of failure, especially with new initiatives, can dishearten the most spirited of people. Talent is never enough. With few exceptions, the best players are the hard workers. It is rightly said that Champions are not born, they are made.'

  const [text, setText] = React.useState('')
  const [words, setWords] = React.useState('')
  const [timer, setTimer] = React.useState('')
  const [gameStart, setGameStart] = React.useState(false)

  function hangleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function calculateWords(text) {
    const WordsArr = text.trim().split(' ')
    const filteredWords = WordsArr.filter(word => { 
      return(
        word !== '' &&  word !== '.'  &&  word !== '!'  &&  word !== ',')})
    return(
      setWords(filteredWords.length)
    )
  }

  function startGame() {
    setTimer(5)
    setWords('')
    setText('')
    setGameStart(true)
  }

  React.useEffect(() => {
    if(gameStart) {
      const Timeout = setTimeout(() => {
        setTimer(prevTimer => prevTimer - 1)
      }, 1000)
      if(timer === 0) {
        clearTimeout(Timeout)
        calculateWords(text)
        setGameStart(false)
      }
    }
  }, [timer, gameStart])

  return (
    <div className="App">

      <h1 className='title'>How fast can you type?</h1>

      <h4 className='text--display'>time: {timer}</h4>
      

      <textarea className='text--area' 
        onChange={hangleChange} 
        value={text} 
        disabled={!gameStart}
      />

<h4 className='text--display'>type this ⇣</h4>
        {!gameStart && <p className='sample--text'>...</p>}
        {gameStart && <p className='sample--text'>{textExample}</p>}

      <button className='button'
       onClick={() => startGame()} 
       disabled={gameStart}
       >



        Let's type!</button>

      <h4 className='text--display'>words: {words}</h4>

    </div>
  )
}

export default App
