import logo from './assets/cat--logo.png'

function Header() {
    return(
        <header className="header">
            <div className='nav'>
            <img src={logo} alt="logo" className="logo"></img>
            <h1 className='header--text'>Old-school Meme Generator</h1>
            </div>
        </header>
    )
}

export default Header