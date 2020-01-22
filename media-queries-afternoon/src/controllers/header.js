import React, {Component} from 'react'
import '../App.css'
class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            toggle: false
        }
        
    }
        toggleMenu = () =>{
            this.setState({toggle: !this.state.toggle})
        }

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
                        <button id='mobile-nav' onClick={this.toggleMenu}>MENU</button>
                        </header>
                        <div id='center-content'>
                        {this.state.toggle === true &&
                        <div id='nav-drop-container'>
                        <ul id='nav-dropdown'>
                            <a>Services</a>
                            <a>Protfolio</a>
                            <a>About</a>
                            <a>Team</a>
                            <a>Contact</a>
                        </ul>
                        </div>
                    }
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