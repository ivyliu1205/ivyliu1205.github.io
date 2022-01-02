import React from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'

export default function HomePage () {
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    
    function handleClickPage() {
        console.log('enter handleClickPage')
        if (menuIsOpen) {
            setMenuIsOpen(false)
        }
    }

    return (
        <div className="page-container" onClick={handleClickPage}> 
            <div class="container-fluid">
                {menuIsOpen && <Menu />}
                <Navbar 
                    menuState={menuIsOpen}
                    changeMenuState={setMenuIsOpen}
                />
            </div>
        </div>
    )
}