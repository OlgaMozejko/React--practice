import React from 'react'

function useGame() {

    const [text, setText] = React.useState('')
    const [words, setWords] = React.useState('')
    const [timer, setTimer] = React.useState('')
    const [gameStart, setGameStart] = React.useState(false)
    const [buttonText, setButtonText] = React.useState("Let's Type!")
  
    const textBoxRef = React.useRef(null)

    function calculateWords(text) {
      const WordsArr = text.trim().split(' ')
      const filteredWords = WordsArr.filter(word => { 
        return(
          word !== '' &&  word !== '.'  &&  word !== '!'  &&  word !== ',')})
      return(
        setWords(filteredWords.length)
      )
    }
  
    function startGame(startingTime = 20) {
      setTimer(startingTime)
      setWords('')
      setText('')
      setButtonText('type type type!')
      setGameStart(true)
      textBoxRef.current.disabled = false
      textBoxRef.current.focus()
    }

    return [textBoxRef, text, setText, words, calculateWords, timer, setTimer,
         buttonText, setButtonText, gameStart, setGameStart, startGame]


}

export default useGame