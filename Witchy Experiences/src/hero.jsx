import pictures from './assets/Group.png'

function HeroComponent() {
    return(
        <section className='hero'>
            <img src={pictures} alt='photo grid' className='photo--grid' />
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--text'>Join unique and exclusive interactive activities
            led by one-of-a-kind witch hosts - all without leaving home!</p>
        </section>
    )
}

export default HeroComponent