import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      {/* <!-- =========footer=========== --> */}
    <section id="footer">
        {/* <img src="images/footer-img.png" class="footer-img"/> */}
        <div class="title-text">
            {/* <p>CONTACT</p> */}
            <h1>CONTACT</h1>
        </div>
        <div class="footer-row">
            <div class="footer-left">
                <h1>Personal Detail</h1>
                <p>Date of birth - 1-Aug-2003</p>
                <p>Marital status - Single</p>
                <p>Sex - Male</p>
                <p>Nationality - Indian</p>
            </div>
            <div class="footer-right">
                <h1>Get In Touch</h1>
                <p>Address: <span className='color-em'>#80-B Victoria floors, Peer Muchalla Road, Kishanpura, dhakoli, Zirakpur,Punjab-140603, India</span></p>
                <p>Email: <span className='color-em'>kartikmehra526@gmail.com</span></p>
                <p>Email: <span className='color-em'>kartikkumar1823@gmail.com</span></p>
                <p>Phone: +91 <span className='color-em'>8288934310</span></p>
            </div>
        </div>

        <div class="social-links">
            <a href="https://www.facebook.com/profile.php?id=100092317645159"><BsFacebook class="fab fa-facebook links"/></a>
            <a href="https://instagram.com/kartik_mehra_19?igshid=NjIwNzIyMDk2Mg=="><BsInstagram class="fab fa-facebook links"/></a>
            <a href="https://www.linkedin.com/in/kartik-kumar-mern"><BsLinkedin class="fab fa-facebook links"/></a>
            <a href="https://github.com/SupremeCoder616"><BsGithub class="fab fa-facebook links"/></a>
            <p>&copy; { new Date().getFullYear()}; Copyright made by Kartik Kumar</p>
        </div>
    </section>
    </>
  )
}

export default Footer
