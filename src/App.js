import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile from './photos/portrait.png'


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

const NavBar = () =>{
  return(
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span>≡</span>
          </button>
          <a class="navbar-brand" href="#">C.BARRON</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="1">Barron</a></li>
            <li><a href="1">About Me</a></li>
            <li><a href="2">Projects</a></li>
            <li><a href="3">Résumé</a></li>
            <li><a href="4">git</a></li>
            <li><a href="4">in</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
const HeaderPage = () =>{
  return(
    <div className="section-1">
    <div className="title-wrap">
      <h1>Carlos Barron</h1>
      <h2>Fullstack Web Developer</h2>
      <h4>Motivated FullStack Developer with experience in three different stacks</h4>
      <p>
        <a href="scroll" className="custom-white-link">View Projects/ Résumé</a>
      </p>
    </div>
  </div>
  )
}
const AboutMe = () =>{
  return(

      <div className="container">
        <div className="box-a1">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-box">
                <h2>About Me</h2>
                <p>
                  <em>
                  Web developer with experience in multiple stacks and languages
                  </em>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="row align-items-center about-main-info">
                <div className="col-lg-6 col-md-6 col-xs-12">
                  <h2> Carlos Barron </h2>
                  <p>
                    I learned that I love to code in the High School good old days when I wrote 
                    my first line of C++ code in a Windows XP PC running Visual Studio 2010.
                    Since then I've been fiddling about with a number of technologies, mainly
                    developing Web applications.
                  </p>
                  <p>
                    In my free time I do mechanic work on my car and I do multiple projects around
                    my house.
                    I also install cameras and repair computers though that isn't as economically
                    viable as it used to be several years ago due to lower costs of PCs, but every
                    now and then I'll get the chance to do so.
                  </p>
                  <p>
                    Below you can find some of my projects and view my resume.
                  </p>
                  <a href="rr" className="custom-white-link">View Résumé</a>
                  <div className="p-3">...</div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="about-m">
                      <div id="banner">
                        <img id="profile-photo" src={profile} alt="profile"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

const Projects = () =>{
  return(
    <div class="container">
      <div id="main" className="box-a1">
        <article class="post featured">
          <header class="major">
            <h2>Project 1: Tool Shop</h2>
            <p>Fullstack e-commerce site built with C#, ASP.NET Framemork, HTML, CSS and Bootstrap</p>
          </header>
          <img src="https://guadarrama.github.io/images/toolShop-sample.gif" alt="" class="added-image" />
          <ul class="actions special">
            <li><a target="_blank" href="http://54.89.14.210/" class="custom-white-link">Open Application</a></li>
            <li><a target="_blank" href="https://github.com/Guadarrama/toolShop" class="custom-white-link">View Code</a></li>
          </ul>
        </article>

        <section class="posts">
          <article>
            <header>
              <h2><a href="https://guadarrama.github.io/#">Project 2: Pet Shop</a></h2>
            </header>
            <img src="https://guadarrama.github.io/images/toolShop-sample.gif" alt="" class="added-image" />
            <p>Fullstack application, built using MongoDB, Express, React.js, Node.js, Axios, Bootstrap, HTML and CSS.
            The application allows the user to add Pets to the database, edit, like and view details.</p>
            <ul class="actions special">
              <li><a target="_blank" href="http://174.129.104.40/pets" class="custom-white-link">Open Application</a></li>
            </ul>
          </article>


          <article>
            <header>
              <h2><a href="#">Project 2</a></h2>
            </header>
            <a href="#" class="image fit">
              <img src="https://guadarrama.github.io/images/toolShop-sample.gif" alt="" class="added-image"/>
            </a>
            <p>Description of second project here.</p>
            <ul class="actions">
              <li><a href="#" class="btn btn-danger">Open Application</a></li>
              <li><a href="#" class="btn btn-danger">View Code</a></li>
            </ul>
          </article>
        </section>

        <section class="posts">
          <article>
            <header class="major">
              <h3>Resume</h3>
            </header>
            <div id="resume"></div>
            <img src="https://guadarrama.github.io/images/toolShop-sample.gif" alt="" class="added-image resume-image" />
            <ul class="actions special">
              <li><a href="https://guadarrama.github.io/#" class="custom-white-link">Download Resume PDF</a></li>
            </ul>
          </article>
          <article>
            <header class="major">
              <h3>Resume</h3>
            </header>
            <div id="resume"></div>
            <img src="https://guadarrama.github.io/images/toolShop-sample.gif" alt="" class="added-image resume-image" />
            <ul class="actions special">
              <li><a href="https://guadarrama.github.io/#" class="custom-white-link">Download Resume PDF</a></li>
            </ul>
          </article>
        </section>
        </div>
      </div>
  )
}

function App() {
  return (
    <body>
      <Background/>
      <NavBar/>
      <HeaderPage />
      <AboutMe />
      <Projects />


    </body>
  )
}

export default App;
