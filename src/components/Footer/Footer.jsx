import React from 'react'
import logo from '../images/logo2.svg'
import phoneIcon from '../images/icon-phone.svg'
import email from '../images/icon-email.svg'
import * as Icon from 'react-bootstrap-icons'
import'./footer.css'
const Footer = () => {
  return (
    <div className='footerDiv' style={{}} >
        <img style={{paddingBottom:'1rem',marginTop:'2rem'}} src ={logo} alt ='logo'></img>
        <div className='listDiv' style={{display:'flex', justifyContent:'space-between'}}>
            <section style={{margin:'1rem'}}>
                <section style={{display:'flex',paddingBottom:'1rem'}}>
                    <img style={{paddingRight:'1rem'}} src={phoneIcon} alt ='phone icon'></img>
                    <span>Phone: +1-543-123-4567</span>
                </section>
                <section style={{display:'flex'}}>
                    <img style={{paddingRight:'1rem'}} src={email} alt ='phone icon'></img>
                    <span>example@fylo.com</span>
                </section>
                
            </section>
            <ul style={{listStyleType:'none'}}>
                <li style={{paddingBottom:'1rem'}}>About Us</li>
                <li style={{paddingBottom:'1rem'}}>Jobs</li>
                <li style={{paddingBottom:'1rem'}}>Press</li>
                <li>Blog</li>
            </ul>
            <ul style={{listStyleType:'none'}}>
                <li style={{paddingBottom:'1rem'}}>Contact Us</li>
                <li style={{paddingBottom:'1rem'}}>Terms</li>
                <li>Privacy</li>
                
            </ul>
            <div style={{ display:'flex' ,margin:'1rem'}}>
                <Icon.Facebook style={{color:'white',paddingRight:'1rem'}}/>
                <Icon.Twitter style={{color:'white',paddingRight:'1rem'}}/>
                <Icon.Instagram/>
            </div>
        </div>
    </div>
  )
}

export default Footer