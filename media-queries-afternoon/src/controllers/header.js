import React, {Component} from 'react'
import '../App.css'
class Header extends Component{
    render(){
        return(
            <div id='main-box'>
                <header>
                
                    <nav id='logo'>Start Bootstrap</nav>
                    
                    <nav id='nav-container'>
                        <a>SERVICES</a>
                        <a>PORTFOLIO</a>
                        <a>ABOUT</a>
                        <a>TEAM</a>
                        <a>CONTACT</a>
                    </nav>
                    <nav id='mobile-nav'>MENU</nav>
                </header>
                <div id='center-content'>
                    <div id='inner'>
                        <p id='welcome'>Welcome To Our Studio!</p>
                        <p id='its'>It's nice to meet you</p>
                        <button id='tell'>Tell me more</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header