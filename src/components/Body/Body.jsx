import React from 'react'
import { Row,Col} from 'react-bootstrap'
import illustration1 from '../images/illustration-1.svg'
import illustration2 from '../images/illustration-2.svg'
import bgcurveD from '../images/bg-curve-desktop.svg'
import bgcurveM from '../images/bg-curve-mobile.svg'
import arrow from '../images/icon-arrow.svg'
import quote from '../images/icon-quotes.svg'
import avatar from '../images/avatar-testimonial.jpg'
import './body.css'
const Body = () => {
    /**/
  return (
    <div >
        
        <div className='firstDiv' >
            <Col className='firstDivChild' md>
                <h1 >All your files in one secure location, accessible anywhere</h1>
                <p >Fylo stores your most important files in one secure location. Access them whenever you need, share and collaborate with friends, family and co-workers</p>
                <Col className='firstDivInput'>
                    <input placeholder = 'Enter your email...' />
                    <button>Get Started</button>
                </Col>          
            
            </Col>
            <img src={illustration1}  />
        </div>
        <div className='secondDiv' >
            <img className='desktopCurve' style={{width:'100%',marginBottom:'0' }} src={bgcurveD} />
            <img className='mobileCurve' src={bgcurveM} />
            <Col className='innerSeconDiv'>
                <Col className='innerInner'>
                    <h1>Stay productive wherever you are</h1>
                    <p className='secondDivText'>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs</p>
                    <p className='secondDivText'>Securely share your files and folders with friends, family and colleagues for live collaboration. No email attachments requiure!</p>
                    <p className='secondDivText1'><a>See how Fylo works <img src ={arrow}/></a></p>
                    <div className='testimonialDiv' style={{width:'300px',borderRadius:'8px'}}>
                        <img src={quote} />
                        <p  style= {{fontSize:'1rem'}}>Fylo has improved our team productivity by an order of magnitude. Since making switch our team has become an oiled collaboration machine.</p>
                        <Col style ={{display:'flex',alignItems:'center'}}>
                            <img style={{borderRadius:'50%',width:'35px',height:'35px', marginRight:'1rem'}} src= {avatar} />
                            <Col>
                                <p style={{ fontWeight:'bolder', margin:'0',marginTop:'1rem'}}>Kyle Burton</p>
                                <p style={{marginTop:'0', fontSize:'0.2 rem'}}>Founder & CEO Huddle </p>
                            </Col>
                        </Col>
                        
                    </div>
                </Col>
                <img className='img2' src={illustration2} />
            </Col>
            
        </div>
        <div className='lastDiv'>
            <Col className='innerLastDiv'>
                <h1> Get early access today</h1>
                <p>It only takes a minute to signup and our free starter tier is extremely generous. If you have any questions our support team would be happy to help you.</p>
            </Col>
            <Col className='lastDivInput'>
                <input name='email' type ='email' placeholder='email@example.com'></input>
                <button >Get Started For Free</button>
            </Col>
        </div>
    </div>
  )
}

export default Body