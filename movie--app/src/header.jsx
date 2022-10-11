import logo from './assets/logo.png'

function Header() {
    return(
        <header className="head">
            <img src={logo} alt="logo" className="logo" />
            <h4 className="title">time for Movie Night...</h4>
        </header>
    )
}

export default Header