import logoPic from './assets/explore--logo.png'

function Header() {
    return(
        <header className='logo--section'>
            <img src={logoPic} alt='logo' className='logo' />
            <h4>my travel journal</h4>
        </header>
    )
}

export default Header