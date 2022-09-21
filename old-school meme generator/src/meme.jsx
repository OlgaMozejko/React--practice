
import React from 'react'


function Meme() {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: ''
    })

    const [memeImg, setMemeImg] = React.useState([])

    function getMeme() {

        let newMeme = Math.floor(Math.random() * memeImg.length)
        let memeUrl = memeImg[newMeme].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memeUrl
        }))
    }

    function typing(event) {
        const {name, value} = event.target 
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    React.useEffect(() => {

        async function getMemes() {
            const res = await fetch('https://api.imgflip.com/get_memes')
            const data = await res.json()
            setMemeImg(data.data.memes)
        }

        getMemes()

    }, [])

    return(
        <main>
            <section className='meme--section'>
            <div className="meme--form">
                <input 
                className="meme--input" 
                type='text'
                placeholder='top text'
                name='topText' 
                value={meme.topText} 
                onChange={typing}
                 />
                <input 
                className="meme--input" 
                type='text' 
                placeholder="bottom text"
                name='bottomText' 
                value={meme.bottomText} 
                onChange={typing}
                 />
                <button onClick={getMeme} className="meme--button">Image please!</button>
            </div>
            {meme.randomImage && <div  className="meme">
                <img src={meme.randomImage} alt='meme image' className='meme--image' />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>}
            </section>
        </main>
    )
}

export default Meme