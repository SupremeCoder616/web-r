import React from 'react'
import { SiJavascript, SiFirebase, SiExpress, SiMongodb, SiPostman } from 'react-icons/si'
import {GrReactjs} from 'react-icons/gr'
import {MdEmail} from 'react-icons/md'
import {BsGithub} from 'react-icons/bs'
import {FaCcStripe} from 'react-icons/fa'
import {IoLogoNodejs} from 'react-icons/io'

const Technologies = () => {
  return (
    <div>
      {/* <!-- ========Features======== --> */}
    <section id="feature">
        <div class="title-text">
            {/* <p>FEATURES</p> */}
            <h1>Technical knowledge</h1>
        </div>
        <div class="feature-box">
            <div class="features">
                {/* <!-- --------1------ --> */}
                <h1>JavaScript</h1>
                <div class="features-desc">
                    <div class="feature-icon">
                        <SiJavascript class="fas fa-shield-alt"/>
                        {/* <i class="fas fa-shield-alt"></i> */}
                    </div>
                    <div class="feature-text">
                        <p>Proficient in JavaScript for dynamic and interactive web development.</p>
                    </div>
                </div>
                {/* <!-- --------End------- --> */}

                {/* <!-- --------2------ --> */}
                <h1>React Js</h1>
                <div class="features-desc">
                    <div class="feature-icon">
                        <GrReactjs class="far fa-check-square"/>
                        {/* <i class="far fa-check-square"></i> */}
                    </div>
                    <div class="feature-text">
                        <p>Extensive experience in building robust web applications using the React framework.</p>
                    </div>
                </div>
                {/* <!-- --------End------- --> */}

                {/* <!-- --------3------ --> */}
                <h1>Google Firebase</h1>
                <div class="features-desc">
                    <div class="feature-icon">
                        <SiFirebase class="fas fa-rupee-sign"/>
                        {/* <i class="fas fa-rupee-sign"></i> */}
                    </div>
                    <div class="feature-text">
                        <p>Strong knowledge of Firebase for backend development and database management.</p>
                    </div>
                </div>
                {/* <!-- --------End------- --> */}

                {/* <!-- --------4------ --> */}
                <h1>EmailJS</h1>
                <div class="features-desc">
                    <div class="feature-icon">
                        <MdEmail class="fas fa-rupee-sign"/>
                        {/* <i class="fas fa-rupee-sign"></i> */}
                    </div>
                    <div class="feature-text">
                        <p>Proficiency in integrating EmailJS for seamless email functionality.</p>
                    </div>
                </div>
                {/* <!-- --------End------- --> */}

                {/* <!-- --------5------ --> */}
                <h1>Git/GitHub</h1>
                <div class="features-desc">
                    <div class="feature-icon">
                        <BsGithub class="fas fa-rupee-sign"/>
                        {/* <i class="fas fa-rupee-sign"></i> */}
                    </div>
                    <div class="feature-text">
                        <p> Experience in version control and collaboration using Git and GitHub 
                            for code management, branching, merging, and pull requests.</p>
                    </div>
                </div>
                {/* <!-- --------End------- --> */}
            </div>

            <div class="features">
                {/* <!-- --------1------ --> */}
                <h1>Stripe</h1>
                <div class="features-desc">
                    <div class="feature-icon">
                        <FaCcStripe class="fas fa-shield-alt"/>
                    </div>
                    <div class="feature-text">
                        <p>Familiarity with Stripe payment gateway integration for secure online
                            transactions.</p>
                    </div>
                </div>
                {/* <!-- --------End------- --> */}

                {/* <!-- --------2------ --> */}
                <h1>Node Js</h1>
                <div class="features-desc">
                    <div class="feature-icon">
                        <IoLogoNodejs class="far fa-check-square"/>
                        {/* <i class="far fa-check-square"></i> */}
                    </div>
                    <div class="feature-text">
                        <p>Proficient in using Node.js for server-side development.</p>
                    </div>
                </div>
                {/* <!-- --------End------- --> */}

                {/* <!-- --------3------ --> */}
                <h1>Express Js</h1>
                <div class="features-desc">
                    <div class="feature-icon">
                        <SiExpress class="fas fa-rupee-sign"/>
                    </div>
                    <div class="feature-text">
                        <p>Experience in utilizing Express.js to build scalable and efficient web applications.</p>
                    </div>
                </div>
                {/* <!-- --------End------- --> */}

                {/* <!-- --------4------ --> */}
                <h1>MongoDB</h1>
                <div class="features-desc">
                    <div class="feature-icon">
                        <SiMongodb class="fas fa-rupee-sign"/>
                    </div>
                    <div class="feature-text">
                        <p>Strong understanding of MongoDB for database management.</p>
                    </div>
                </div>
                {/* <!-- --------End------- --> */}

                {/* <!-- --------5------ --> */}
                <h1>PostMan</h1>
                <div class="features-desc">
                    <div class="feature-icon">
                        <SiPostman class="fas fa-rupee-sign"/>
                    </div>
                    <div class="feature-text">
                        <p>Proficiency in using Postman for API development and testing.</p>
                    </div>
                </div>
                {/* <!-- --------End------- --> */}
            </div>
        </div>
    </section>
    {/* <!-- ========End======= --> */}
    </div>
  )
}

export default Technologies
