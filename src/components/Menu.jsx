import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/Menu.css'
import ProfileImg from '../asserts/profile.png'
import InfoData from '../info.json'
import LinkedInIcon from '../asserts/linkedin.svg'
import GithubIcon from '../asserts/github.svg'
import EmailIcon from '../asserts/email.svg'

export default function Menu () {

    const appInfos = {
        Email: {
            'data': InfoData['profile']['email'],
            'img': EmailIcon
        },
        Github: {
            'data': InfoData['profile']['github'],
            'img': GithubIcon
        },
        Linkedin: {
            'data': InfoData['profile']['linkedin'],
            'img': LinkedInIcon
        }
    }

    const handleClickApp = (event, appName) => {
        if (appName === 'Email') {
            console.log('click email')
            window.location.href = `mailto:${appInfos[appName].data}`
        } else if (appName == 'Github') {
            console.log('click Github')
            window.location.href = appInfos[appName].data
        } else if (appName == 'Linkedin') {
            console.log('click Linkedin')
            window.location.href = appInfos[appName].data
        }
    }

    const apps = Object.keys(appInfos).map(appName => {
        return (
            <div className='menu-app-items' onClick={e => handleClickApp(e, appName)} key={appName}>
                <img className='menu-app-icons' src={appInfos[appName]['img']} />
                <div className='menu-app-texts'>
                    {appName}
                </div>
            </div>
        )
    })

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
                {apps}
            </div>
            <div id='menu-tool-seation'>
            </div>
        </div>
    )
}