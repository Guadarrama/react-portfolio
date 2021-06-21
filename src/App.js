import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from './photos/portrait.png';
import petshop from './photos/petShop-sample.gif';
import toolShop from './photos/toolShop-sample.gif';
import headerProfile from './photos/header-profile.jpg';
import React, {useState} from 'react';
import { Linkedin } from 'react-feather';
import { GitHub } from 'react-feather';
import { FileText } from 'react-feather';
import {myHTML} from './photos/Resume.js';
import resume from './photos/resume.pdf';

const Background = () =>{
  return(
    <div className="background">
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
      <div className="firefly"></div>
    </div>
  )
}

const NavigationBar = props =>{

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return(
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          {/* <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> */}
          <button class="custom-toggle navbar-toggle" type="button" data-toggle="collapse" aria-expanded={!isNavCollapsed ? true : false} aria-label="+" onClick={handleNavCollapse}>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="https://guadarrama.github.io/" >C.BARRON</a>
        </div>
        {/* <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> */}
        <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
          <ul class="nav navbar-nav navbar-right dropdown">
            <li><a href="#barron">Barron</a></li>
            <li><a href="#aboutMe">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume-data">Résumé</a></li>
            <li><a href="https://github.com/Guadarrama">
              <GitHub size={20} />
              </a></li>
            <li><a href="https://www.linkedin.com/in/carlos-barron-guadarrama-800743194/">
              <Linkedin size={20} />
              </a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
const HeaderPage = () =>{
  return(
    <div className="section-1" id="barron">
    <div className="title-wrap">
      <img src={headerProfile} id="round-profile" alt="header-profile"/>
      <h1>Carlos Barron</h1>
      <h2>Fullstack Web Developer</h2>
      <h5>
        <a href="https://github.com/Guadarrama/toolShop" className="icon" ><GitHub size={20} /></a>
        <a href="https://www.linkedin.com/in/carlos-barron-guadarrama-800743194/" className="icon" ><Linkedin size={20} /></a>
        <a href="#resume-data" className="icon" ><FileText size={20}/></a>
      </h5>
      <h5><em>FullStack Developer with experience in three different stacks</em></h5>
      <p>
        <div class="content">
            <a href="#projects" className="fadeIn">
            <svg id="more-arrows">
              <polygon class="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 " />
              <polygon class="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 " />
              <polygon class="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 " />
            </svg>
          </a>
        </div>
      </p>
    </div>
  </div>
  )
}
const AboutMe = () =>{
  return(

      <div className="container" id="aboutMe">
        <div className="box-a1">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-box">
                <h2>About Me</h2>
                  <em>
                  Web developer with experience in multiple stacks and languages
                  </em>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="row align-items-center about-main-info">
                <div className="col-lg-6 col-md-6 col-xs-12">
                  <h3><b> Carlos Barron </b></h3>
                  <div id="info-text">
                    <p>
                      I learned that I love to code in the High School good old days when I wrote 
                      my first line of C++ code in a bulky HP running Visual Studio 2010 on the WindowsXP Operating System.
                      Since then I've been fiddling about with a number of technologies, mainly
                      as a Web Developer.
                      When I graduated college I worked with my dad as a technician; fixing computers for small businesses and 
                      working with small local networks. I have chosen to leave this occupation because every year it has
                      become less and less economically viable.
                    </p>
                    <p>
                      I have been a technical consultant for small businesses since I graduated college(
                        for about 4-5 years
                      ). But my
                      career preference has always been in software development.
                    </p>
                    <p>
                      In my free time I like to learn and read a lot. I taught myself a number of things
                      such as doing mechanic work on my car and basic carpentry doing small projects around my 
                      house.
                    </p>
                    <p>
                      Below you can find some relevant development projects and view my resume.
                    </p>
                  </div>
                  <a href="rr" className="btn w-link">View Résumé</a>
                  <div className="p-3">___</div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="about-m">
                      <img id="profile-photo" src={profile} alt="profile"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

const Projects = () => {
  return(
    <div className="container" id="projects">
      <div className="box-a1">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-box">
              <h2>Web Application Projects</h2>
              <p>
                <em>
                  These Projects have been deployed using Amazon AWS. Click on the buttons to open application
                  or to view the source code.
                  </em>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row align-items-center about-main-info">
              <div className="col-lg-6 col-md-6 col-xs-12">
                <h2>eCommerce Site: Tool Shop</h2>
                <div id="info-text">
                  <img src={toolShop} alt="tool_shop" className="project-m"/>
                  <p>
                      This application was created to emulate a simple eCommerce website.
                      The application handles multiple users in a ORM schema with many-to-many and one-to-one relationships.
                      Every user is able to buy items by adding 'itmes to cart' and 'checking out.'
                      Once the User 'Checks out' or completes a purchase the data is saved as 'previous purchases.'
                      Users are also able to sell items by posting them on the front page, including prices and descriptions
                      for the items.
                      Guests can create accounts to access the items being sold on the site.
                      <br/>
                    <em><b>**</b>This site was built using <b>ASP.NET, C#, CSS</b> and a combination of <b>HTML</b> and <b>Blazor</b> for the front-end. Also using the <b>Entity Framework</b> to implement the ORM Schema.
                      </em>
                  </p>
                </div>
                <div class="profile-links">
                  <a target="_blank" rel="noreferrer" href="http://54.89.14.210/" class="btn w-link">Open Application</a>
                  <a target="_blank" rel="noreferrer" href="https://github.com/Guadarrama/toolShop" class="btn w-link">View Code</a>
                </div>
                <div className="p-3">__</div>
              </div>

              <div className="col-lg-6 col-md-6 col-xs-12">
                <h2>Categorization App: Pet Shop</h2>
                <div id="info-text">
                  <img src={petshop} alt="pets" className="project-m" />
                  <p>
                      This application was made to keep track of multiple 'pets' in a Pet Shop.
                      The user can add, remove or edit multiple pets. They can also 'like' a pet
                      The user can also 'adopt' a pet, which removes the pet from the database.
                      This application features CRUD commands. 
                      <br />
                    <em><b>**</b>This site was built using the <b>MERN Stack</b> using <b>ReactJS</b> for the front-end, <b>NodeJS</b> for the <b>API</b> routes and <b>mongoDB</b> as a <b> non-relational database.</b>
                    This App was deployed using <b>Amazon AWS</b> on a <b>Ubuntu 18.4</b> server.
                      </em>
                  </p>
                </div>
                <div class="profile-links">
                  <a target="_blank" rel="noreferrer" href="http://54.89.14.210/" class="btn w-link">Open Application</a>
                  <a target="_blank" rel="noreferrer" href="https://github.com/Guadarrama/toolShop" class="btn w-link">View Code</a>
                </div>
                <div className="p-3">__</div>
              </div>

              <div className="col-lg-12 col-md-12 col-xs-12" id="resume-data">
                <h2>Résumé</h2>
                <p>___</p>
                <div id="resume-cladle">
                    <div dangerouslySetInnerHTML={{ __html: myHTML }} id="resume-document"/>
                </div>
                <a href={resume} className="btn w-link" download>Download Résumé PDF</a>
                <div className="p-3">___</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const ContactMe =() =>{
  return(
    <div className="container">
      <div className="box-a1">
          <footer id="footer">
            <section class="split contact">
              <section>
                <h4>Email</h4>
                <a href="mailto:albertc.barron@gmail.com">albertc.barron@gmail.com</a>
              </section>
              <section>
                <h4>Other External links __</h4>
              <a target="_blank" rel="noreferrer" href="https://github.com/Guadarrama">
                <GitHub size={20} />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/carlos-barron-guadarrama-800743194/">
                <Linkedin size={20} />
              </a>
              </section>
            </section>
          </footer>
        </div>
      </div>

  )
}
const Block = () => {
  return(
    <div className="container">
      <div className="block"></div>
    </div>
  )
}
function App() {
  // const titleRef = useRef()
  // handleBackClick = () =>{titleRef.current.scrollIntoView({ behavior:'smooth' })}

  return (
    <body>
      <Background/>
      <NavigationBar/>
      <HeaderPage />
      <AboutMe />
      <Block/>
      <Projects />
      <Block/>
      <ContactMe />
      < Block/>

    </body>
  )
}

export default App;
