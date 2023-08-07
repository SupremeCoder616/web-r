import React from 'react'
import Summary from '../components/Summary'
import Technologies from '../components/Technologies'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      {/* Home */}
      <section id="home">
            <h2>Hey I'm Kartik Kumar</h2>
            <span>MERN Developer</span>
            <div className="ho1">
                <p>Web Developer | Web Designer </p>
                    {/* <div className="btn">
                        <a className="green" href="about.html">Read More</a>
                        <a className="white" href="contact.html">Contact Us</a>
                    </div> */}
            </div>
      </section>
      {/* Home */}

      <Summary/>


      <section id="our-courses">
        <div class="vl"></div>
        <div class="title-text">
            {/* <samp>&#x2022; OUR EXPERTISE</samp> */}
            <h1>My Skills</h1>
        </div>

        <div class="our-box">
            {/* <!-- ------1------ --> */}
            <div class="fe-box">
              <img src="../img/html.png" alt='img'/>
              <h6>HTML5</h6>
            </div>
            {/* <!-- -----End------ --> */}
    
            {/* <!-- ------2------ --> */}
            <div class="fe-box">
              <img src="../img/css.png" alt='img'/>
              <h6>CSS</h6>
            </div>
            {/* <!-- -----End------ --> */}
    
            {/* <!-- ------3------ --> */}
            <div class="fe-box">
              <img src="../img/bootstrap-icon-css.png" alt='img'/>
              <h6>Bootstrap</h6>
            </div>
            {/* <!-- -----End------ --> */}
    
            {/* <!-- ------4------ --> */}
            <div class="fe-box">
              <img src="../img/tailwind.png" alt='img'/>
              <h6>Tailwind CSS</h6>
            </div>
            {/* <!-- -----End------ --> */}

            {/* <!-- ------5------ --> */}
            <div class="fe-box">
              <img src="../img/javascript.png" alt='img'/>
              <h6>Javascript</h6>
            </div>
            {/* <!-- -----End------ --> */}

            {/* <!-- ------6------ --> */}
            <div class="fe-box">
              <img src="../img/react.png" alt='img'/>
              <h6>React Js</h6>
            </div>
            {/* <!-- -----End------ --> */}

            {/* <!-- ------7------ --> */}
            <div class="fe-box">
              <img src="../img/node.png" alt='img'/>
              <h6>Node Js</h6>
            </div>
            {/* <!-- -----End------ --> */}

            {/* <!-- ------8------ --> */}
            <div class="fe-box">
              <img src="../img/mogodb.png" alt='img'/>
              <h6>MongoDB</h6>
            </div>
            {/* <!-- -----End------ --> */}

            {/* <!-- ------9------ --> */}
            <div class="fe-box">
              <img src="../img/github1.png" alt='img'/>
              <h6>GitHub</h6>
            </div>
            {/* <!-- -----End------ --> */}

            {/* <!-- ------9------ --> */}
            <div class="fe-box">
              <img src="../img/firebase.png" alt='img'/>
              <h6>Google Firebase</h6>
            </div>
            {/* <!-- -----End------ --> */}

            {/* <!-- ------10------ --> */}
            <div class="fe-box">
              <img src="../img/postman-removebg-preview.png" alt='img'/>
              <h6>PostMan</h6>
            </div>
            {/* <!-- -----End------ --> */}
        </div>
      </section>

      <Technologies/>

      <div id="our-courses">
        <div class="title-text">
            <h1>Important message</h1>
        </div>

        <div class="imp-ms">
          <h2>Hello everyone i want to give you this important message</h2>
          <h3>Whether you are companies recruiter or freelancing client</h3>
          <br/>
          <p>
            <span>1.</span>
            First of all, I want to tell you that I have not given my complete information in this website, 
            in fact for some reason I could not give my complete information in this website so please sorry

            <br/>
            <br/>
            <span>2.</span>
            Actually, due to some problem, I could not tell my complete information in this website 
            and because of the same problem, I could not make a very good web app, but I promise you that 
            in the coming time, I will definitely show you a web app as soon as possible.
            <br/>
            <br/>
            <span>3.</span>
            I want to tell you that you give me a chance, I will definitely show you all 
            my projects and all my skills in the coming time, whether you are  companies 
            recruiter or a freelancing client, just give me a chance,  I will definitely show my best work.
            <br/>
            <br/>
            <span>4.</span>
            By the way, I was making a 3D design web-app with full functionality, but due to some problem, 
            I could not make it, but I will definitely bring a work on it in the coming time.
            <br/>
            <br/>
            <span>5.</span>
            And if you want to see my more information like my work experience 
            and my certificates then you can see my linkedin ( <a href="https://www.linkedin.com/in/kartik-kumar-mern"> Kartik Kumar</a> ) profile and you can also see my resume
          </p>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Home
