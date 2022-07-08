import React, {useState} from 'react'
import './navbar.css'
import logo from '../images/logo.svg'
import { Col } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'
const Navbar = () => {
    const [display, setDisplay] = useState('none');
    const handleClick = ()=>{
        if( display =='none'){
            setDisplay('flex')
        }else if(display == 'flex'){
            setDisplay('none')
        }
    }

  return (
    <Col style={{display:'flex', justifyContent:'space-between',padding:'3rem'}} md>
        <img className='logo' src ={logo} alt ='logo'></img>
        <ul className=' links'>
            <li className='link1'>Features</li>
            <li className='link1'>Team</li>
            <li>Sign In</li>
        </ul>
        <div onClick={handleClick}>
            
            <Icon.List  className='bars'/>
        </div>
        <div className ='dropDown' style={{display:display}}>
            <a>Features</a>
            <a>Team</a>
            <a>Sign In</a>
        </div>
    </Col>
  )
}

export default Navbar