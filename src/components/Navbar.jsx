import React from 'react'
import '../styles/Navbar.css'
import 'bootstrap/dist/css/bootstrap.css'
import MenuIcon from '../asserts/menu.svg'

export default function Navbar (props) {
    const { menuState, changeMenuState } = props
    const [dt, setDt] = React.useState(new Date().toLocaleString())
    
    React.useEffect(() => {
        let secTimer = setInterval(() => {
            setDt(new Date().toLocaleString())
        }, 1000)
        return () => clearInterval(secTimer)
    }, [])

    function handleClickStart() {
        console.log('handleClickStart')
        changeMenuState(!menuState)
    }

    return (
        <nav class="navbar fixed-bottom" role="navigation">
                <div class="nav-container">
                    <div id="navbar-left">
                        <li id="start-btn-container" onClick={handleClickStart}>
                            <img id="menu-icon" src={MenuIcon} />
                            <div id="menu-text">Start</div>
                        </li>
                        <div id="navbar-left-other-container">
                            <li className="other-btn-containers">Page1</li>
                            <li className="other-btn-containers">Page2</li>
                        </div>
                    </div>
                    <div id="navbar-right">
                        {dt}
                    </div>
                </div>
        </nav>
    )
}