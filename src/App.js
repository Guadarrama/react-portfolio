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
const AboutMe = () =>{
  return(
    <div id="about" className="about-box">
      <div className="about-a1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-box">
                <h2>About Me</h2>
                <p>Motivated and passionate Fullstack Web Developer
                    With experience in multiple stacks and languages.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="row align-items-center about-main-info">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <h2> Carlos Barron </h2>
                  <p>Motivated and passionate Fullstack Web Developer. With experience in multiple stacks and languages.</p>
                  <p>text</p>
                  <a href="rr" className="new-btn-d br-2">View Résumé</a>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="about-m">
                    <div id="banner">
                      <img src={profile} alt="profile"/>
                    </div>
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
const NavBar = () =>{
  return(
    <nav className="navbar navbar-inverse navbar-fixed-top navbar-expand-sm">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="logo">LOGO</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="1">1</a></li>
          <li className="nav-item"><a href="2">2</a></li>
          <li className="nav-item"><a href="3">3</a></li>
          <li className="nav-item"><a href="4">4</a></li>
        </ul>
      </div>
    </nav>
  )
}

function App() {
  return (
    <body>
      <Background/>
      <NavBar/>
      <div className="section-1">
        <div className="title-wrap">
          <h1>Carlos Barron</h1>
          <h2>Fullstack Web Developer</h2>
          <h4>Motivated FullStack Developer with experience in three different stacks</h4>
          <p>
            <a href="scroll" className="btn btn-danger">View Projects/ Resume</a>
          </p>
        </div>
      </div>
      
      <AboutMe />


    </body>
  )
}

export default App;
