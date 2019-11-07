import React from 'react'
import PropTypes from 'prop-types'

import resumePic from '../images/resume.jpg'
import resumePic2 from '../images/resume2.jpg'
import wclogo from '../images/WitchcraftLogo.png'
import profile from '../images/profile1.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="portfolio" className={`${this.props.article === 'portfolio' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Portfolio</h2>
          <h3 className="major">TEAM PROJECTS</h3>

          <h4 className="major">ZERO FRICTION</h4>
          <span className="image main"><img src={wclogo} alt="" /></span>
          <p>Made by Unity 2019 (C#)</p>
          <p>Zero Friction is an online multiplayer hover bike racing game which can play up to four players per room. </p>
          <p>Zero Friction is a school production game made by Unity 2019 C# with Photon Engine PUN2 with a group of four students which took 5 months to make</p>
          <p>I am a lead programmer in this project and these following features I implemented in Zero Friction.</p>
          <p>- Implemented lobby’s room list for creating and joining a session.
          <br></br>- Implemented hover bike’s physics by using PID concept
          <br></br>- Integrated and scripted audios from Wwise project
          <br></br>- Developed positioning logic and algorithm.
          <br></br>- Implemented user interface and main menu functionality
          <br></br>- Implemented power ups abilities
          </p>

          <h4 className="major">WITCHCRAFT</h4>
          <span className="image main"><img src={wclogo} alt="" /></span>
          <iframe width="740" height="410"
            src="https://www.youtube.com/embed/48zPmKHvTdI">
          </iframe>
          <p></p>
          <iframe width="740" height="410"
            src="https://www.youtube.com/embed/tco9LuRUAMs">
          </iframe>
          <p>Made by Unreal Engine 4 (Blueprint/C++)</p>
          <p>WitchCraft VR is an action adventure game where you are a mage stuck in an alternate dimension.
            You must figure out what happened to this world, while learning to use the powers you have gained here.</p>
          <p>Witchcraft is a school production game made by Unreal Engine 4 using Unreal Blueprint and C++ with a group of seven programmers,
            nine artists and one game designer, which took about 8 months to make it.</p>
          <p>I am a Gameplay and UI/UX Programmer in this project and these following features I implemented in Witchcraft.</p>
          <p>- Oculus and HTC Vive adaptation, getting user device then change the origin transform at the start scene.
          <br></br>- Spell system by getting output from gesture system, Fireball project out a projectile, Earth Shield check raycast hit on player’s platform.
          <br></br>- Boss skills by using behaviour tree for boss states.
          <br></br>- UI of player and AI health management by using decal and texture lerp.
          </p>

          <h3 className="major">Personal Project</h3>
          <h4 className="major">3D Multiplayer Game using UNET</h4>
          <p>Made by Unity 2018 (C#)</p>
          <p>This project is for learning purpose about how is the UNET (Unity Networking System) working.
            My goal is to create a Third-Person Role-Playing Game that player can create their own lobby or join existing lobby and playing in a flying arena,
            and fight until you are the last one. Game will playable both in PC and Mobile. In the game, the features that will coming up are character customization,
            leaderboard, achievement, skills, and items.
          </p>
          <iframe width="740" height="410"
            src="https://www.youtube.com/embed/ZJ_djJCKExU">
          </iframe>
          <p></p>
          <p>These following feautures are in this project</p>
          <p>- Custom network manager for the server side gameplay logics.
          <br></br>- Lobby and matchmaking(Unity hosting only).
          <br></br>- Damaging logics between client and server
          <br></br>- Replication for user interfaces, health and player name.
          <br></br>- Level gameplay and arena obstacles. (Under Development)
          <br></br>- Character customization system, changing clothes and weapon. (Under Development)
          <br></br>- Character Selection in game. (Under Development)
          <br></br>- Skills and attributes of characters. (Under Development)
          </p>

          <h4 className="major">RTS Game Networking</h4>
          <p>Made by Visual Studio 2017 (C++/DirectX)</p>
          <p>In this project, it is a networking project in the RTS Game concept by using my engine based on XEngine which developed throughout courses in LaSalle College.
            I use wsock32 tcp socket to build this project, and for the user interfaces I use ImGui for input box and buttons.
          </p>
          <p>For the client part, I uses non-blocking tcp for the connections which after started up a server application will listen to the ip address and port and wait for the client to connect.</p>
          <iframe width="740" height="410"
            src="https://www.youtube.com/embed/dIFs_6sPbYU">
          </iframe>

          <p></p>

          <h4 className="major">AI Project</h4>
          <p>Made by Visual Studio 2017 (C++/DirectX)</p>
          <p>AI Project is a project for learning how pathfinding work by using Breadth First Search, Depth First Search, Dijkstra and A* algorithm .
            I uses DirectX to draw a graph search for each algorithm. Also, I created several ai behaviour such as Alignment, Arrival, Cohesion, Seek, Separation, Steering and Wander behaviour.
          </p>
          <iframe width="740" height="410"
            src="https://www.youtube.com/embed/jf9hY27sDDU">
          </iframe>

          <p></p>

          <h4 className="major">Physics Simulator</h4>
          <p>Made by Visual Studio 2017 (C++/DirectX)</p>
          <p>For my physics simulator, I created it from my animation and graphics project which based on XEngine that I developed throughout the year at LaSalle College.
            The way that the simulator work is spawning particle objects in different ways such as spraying out from origin, particle chains, spring, and ragdoll breakdown.
            I uses OBB to create plane as simulator’s ground, so particles object can collide on it.
          </p>
          <iframe width="740" height="410"
            src="https://www.youtube.com/embed/KaglvkvXKfw">
          </iframe>
          {close}
        </article>

        <article id="portfoliovdo" className={`${this.props.article === 'portfoliovdo' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Portfolio Video</h2>
          <iframe width="740" height="410"
            src="https://www.youtube.com/embed/hZ3-dOFysYQ">
          </iframe>
          {close}
        </article>

        <article id="resume" className={`${this.props.article === 'resume' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Resume</h2>
          <a href="https://docs.google.com/document/d/1f7Po-Tfq8PIGdj2hVRFHiA_DUFM78a4LL0i6nqcXq1M/edit?usp=sharing">Download Resume</a>
          <span className="image main"><img src={resumePic} alt="" /></span>
          <p></p>
          <span className="image main"><img src={resumePic2} alt="" /></span>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">About</h2>
          <img src={profile} alt="" />
          <p>Hello Everyone,</p>
          <p>I am a software engineer who recently graduated in Game Programming from Vancouver Film School and LaSalle College Vancouver, and I have a strong passion for the game industry including e-sports. I have experience working on two production teams during my school years, where I mainly focused on gameplay and online multiplayer mechanics. My objective in the game industry is to work as a gameplay programmer on an online competitive multiplayer game, and continue to develop my programming skills, learning new experience, and solving problems to achieve new creative content for the future of my career.</p>
          <p>Thank you</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <form action="https://formspree.io/saharat.teddy@gmail.com" method="POST">
            <label htmlFor="name">Name</label>
            <input type="text" name="Name" />
            <label htmlFor="name">Email</label>
            <input type="email" name="Email" />
            <label htmlFor="message">Message</label>
            <input type="text" name="Message" />
            <input type="submit" value="Send" />
          </form>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/teddysn" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
            <li><a href="https://github.com/teddysot" className="icon fa-github"><span className="label">GitHub</span></a></li>          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main