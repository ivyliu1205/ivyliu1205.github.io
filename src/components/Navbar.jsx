import React from 'react'
import '../styles/Navbar.css'
import 'bootstrap/dist/css/bootstrap.css'

export default function Navbar () {
    return (
        <nav class="navbar fixed-bottom" role="navigation">
            {/* <div class="container-fluid"> */}
            {/* <div> */}
                <div class="nav-container">
                    <div id="navbar-left">
                        <li id="start-btn-container">Start</li>
                        <div id="navbar-left-other-container">
                            <li className="other-btn-containers">Page1</li>
                            <li className="other-btn-containers">Page2</li>
                        </div>
                    </div>
                    <div id="navbar-right">
                        <li>Time</li>
                    </div>
                </div>
            {/* </div> */}
            {/* </div> */}
        </nav>
    )
}