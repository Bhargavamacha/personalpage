/* es-lint disable */
import React, { useState } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';
import Button from '@material-ui/core/Button'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Tech from './components/Tech'
import Contact from './components/Contact'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
function App() {
  const contact = React.createRef()
  const scrollToBottom = () => {
    contact.current.scrollIntoView({ behavior: 'smooth' })
  }
  const theme = createMuiTheme({
    typography: {
      // Use the system font.
      fontFamily:
        'Source Code Pro'
    },
  })
  const [select, setselect] = useState('none')
  return (
    <div className="App" style={{ overflow: 'hidden' }}>
      <ThemeProvider theme={theme}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={5} >
            <div style={{ marginLeft: 50, marginTop: 40, position: window.innerWidth > 600 ? 'fixed' : 'relative' }}>
              <Grid item xs={12} sm={8} >
                <img src='https://storageapi.fleek.co/bhargavamacha-team-bucket/me.jpg' alt={'Couldn\'t load'} style={{ width: 150, height: 150, borderRadius: 400 }} />
                <p style={{ fontSize: 23 }}>Hey there!<br />
                  <p style={{ display: 'inline', backgroundColor: 'black', color: 'white' }}>This is Bhargava.</p><br />
                  Pronouns: He/Him/His
                </p>
                <p style={{ fontSize: 20}}>Junior @ IIT Kharagpur.<br />	Learning and working with technologies that <u>will</u> <br />power the next couple of decades... or maybe more?<br /> </p>
                {/* <Button onClick={scrollToBottom} style={{ backgroundColor: 'black', marginRight: 20, fontFamily: 'Source Code Pro', color: 'white' }}>Contact</Button> */}
                <Button onClick={() => window.open("https://resume.bhargavamacha.info", "_blank")} style={{ backgroundColor: 'black', color: 'white', fontFamily: 'Source Code Pro' }}>RESUME</Button>
                <p style={{ fontSize: 22 }}>Connect with me @</p>
                <SocialIcon onMouseEnter={() => setselect('twitter')} onMouseLeave={() => setselect('none')} url="http://twitter.com/machabhargava" style={{ marginRight: 15, height: 35, width: 35, opacity: select === 'twitter' ? 1 : select === 'none' ? 1 : 0.2 }} />
                <SocialIcon onMouseEnter={() => setselect('github')} onMouseLeave={() => setselect('none')} url="https://github.com/Bhargavamacha" style={{ marginRight: 15, height: 35, width: 35, opacity: select === 'github' ? 1 : select === 'none' ? 1 : 0.2 }} />
                <SocialIcon onMouseEnter={() => setselect('insta')} onMouseLeave={() => setselect('none')} url="https://www.instagram.com/bhargava_macha/" style={{ marginRight: 15, height: 35, width: 35, opacity: select === 'insta' ? 1 : select === 'none' ? 1 : 0.2 }} />
                <SocialIcon onMouseEnter={() => setselect('linked')} onMouseLeave={() => setselect('none')} url="https://www.linkedin.com/in/bhargava-sai-macha-941241172/" style={{ marginRight: 15, height: 35, width: 35, opacity: select === 'linked' ? 1 : select === 'none' ? 1 : 0.2 }} />
                <SocialIcon onMouseEnter={() => setselect('fb')} onMouseLeave={() => setselect('none')} url="https://www.facebook.com/bhargavasai.macha/" style={{ marginRight: 15, height: 35, width: 35, opacity: select === 'fb' ? 1 : select === 'none' ? 1 : 0.2 }} />
                <SocialIcon onMouseEnter={() => setselect('mail')} onMouseLeave={() => setselect('none')} url="mailto:mbsai29@gmail.com" style={{ marginRight: 15, height: 35, width: 35, opacity: select === 'mail' ? 1 : select === 'none' ? 1 : 0.2 }} />
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} sm={7}>
          <div style={{ backgroundColor: '#aec9eb', color: 'black' }}>
              <div style={{ marginLeft: 40 }}>
                <br />
                <p style={{ marginTop: 0, fontSize: 30 }}>Tech I am currently working on</p>
                <Tech />
              </div>
            </div>
            <div style={{ backgroundColor: 'lightgreen', color: 'black' }}>
              <div style={{ marginLeft: 40 }}>
                <br />
                <p style={{ marginTop: 0, fontSize: 30 }}>Skills</p>
                <Skills />
              </div>
            </div>
            <div style={{ backgroundColor: 'lightpink', color: 'black', }}>
              <div style={{ marginLeft: 40 }}>
                <br />
                <p style={{ marginTop: 0, fontSize: 30 }}>Experience</p>
                <Experience />
              </div>
            </div>
            <div style={{ backgroundColor: 'lightblue', color: 'black', marginTop: -40, }}>
              <div style={{ marginLeft: 40 }}>
                <br />
                <p style={{ marginTop: 0, fontSize: 30 }}>Projects</p>
                <Projects />
                <br />
                <br />
              </div>
            </div>
            <div style={{ backgroundColor: '#fed8b1', color: 'black', marginBottom: -20 }}>
              <div style={{ marginLeft: 40 }}>
                <br />
                <p style={{ marginTop: 0, fontSize: 30 }}>Certifications</p>
                <Certifications />
                <br />
                <br />
              </div>
            </div>
            {/* <div ref={contact} style={{ backgroundColor: '#d58cff', color: 'black', marginBottom: -40 }}>
              <div style={{ marginLeft: 40 }}>
                <br />
                <p style={{ marginTop: 0, fontSize: 30 }}>CONTACT ME</p>
                <Contact />
                <br />
                <br />
              </div>
            </div> */}
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
