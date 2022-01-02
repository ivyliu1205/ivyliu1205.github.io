import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Menu.css'
import ProfileImg from '../asserts/profile.png'

export default function Menu () {
    return (
        <div id='menu-container' onClick={e => e.stopPropagation()}>
            <div id='menu-user-section'>
                <div id='menu-user-photo-container'>
                    <img id='menu-user-photo' src={ProfileImg} />
                </div>
                <div id='menu-user-name'>
                    Yiting Liu <br />
                    刘亦婷
                </div>
            </div>
            <div id='menu-app-section'>
                Apps
            </div>
            <div id='menu-tool-seation'>
                Tool
            </div>
        </div>
    )
}