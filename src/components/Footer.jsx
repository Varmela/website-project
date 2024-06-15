import React from 'react'
import logo from '../assets/logo.png';
const Footer = () => {
  return (
    <footer className='footer-part'>
    <div className='part1'>
    <img src={logo}/>
    <p>The leading provider of quality jewelry, tstto and piercing supplies</p>
    </div>
    <hr/>
    <section className='part2'>
 <div>
 <h2>Helpful links</h2>
 <h4>Contact us</h4>
 <h4>Support</h4>
 <h4>About us</h4>
 
 </div>
 <div>
 <h2>Shopping</h2>
 <h4>Reviews</h4>
 <h4>Returns</h4>
 <h4>Shipping</h4>
 </div>
 <div>
 <h2>Get in touch</h2>
 <h4>224515855</h4>
 <h4>Suport:email.@gmail.com</h4>

 </div>
 <div>
 <h3>Sign up to get in touch</h3>
 <input/>
 <button>Submit</button>
 </div>
    </section>
    </footer>
  )
}

export default Footer