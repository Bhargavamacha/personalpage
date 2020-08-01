import React, { useState } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';
import Button from '@material-ui/core/Button'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
function App() {
  const theme = createMuiTheme({
    typography: {
      // Use the system font.
      fontFamily:
        'Source Code Pro'
    },
  })
  const [select, setselect] = useState('none')
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={5} >
            <div style={{ marginLeft: 50, marginTop: 40, position: window.innerWidth > 600 ? 'fixed' : 'relative' }}>
              <Grid item xs={12} sm={8} >
                <img src={require('./assets/me.jpg')} alt={'Couldn\'t load'} style={{ width: 150, height: 150, borderRadius: 400 }} />
                <p style={{ fontSize: 23 }}>Hey there!<br />
                  <p style={{ display: 'inline', backgroundColor: 'black', color: 'white' }}>This is Bhargava.</p><br />
            Pronouns: He/Him/His
            </p>
                <p style={{ fontSize: 20 }}>Junior @ IIT Kharagpur.<br />	&#10084; Everything Tech, Everything Pop.<br /> Making tech work while catching up with Netflix.</p>
                <Button style={{ backgroundColor: 'black', marginRight: 20, fontFamily: 'Source Code Pro', color: 'white' }}>Contact</Button>
                <Button style={{ backgroundColor: 'black', color: 'white', fontFamily: 'Source Code Pro' }}>RESUME</Button>
                <p style={{ fontSize: 22 }}>Let's get connected!</p>
                <SocialIcon onMouseEnter={() => setselect('twitter')} onMouseLeave={() => setselect('none')} url="http://twitter.com/machabhargava" style={{ marginRight: 15, height: 35, width: 35, opacity: select === 'twitter' ? 1 : select === 'none' ? 1 : 0.2 }} />
                <SocialIcon onMouseEnter={() => setselect('insta')} onMouseLeave={() => setselect('none')} url="https://www.instagram.com/bhargava_macha/" style={{ marginRight: 15, height: 35, width: 35, opacity: select === 'insta' ? 1 : select === 'none' ? 1 : 0.2 }} />
                <SocialIcon onMouseEnter={() => setselect('linked')} onMouseLeave={() => setselect('none')} url="https://www.linkedin.com/in/bhargava-sai-macha-941241172/" style={{ marginRight: 15, height: 35, width: 35, opacity: select === 'linked' ? 1 : select === 'none' ? 1 : 0.2 }} />
                <SocialIcon onMouseEnter={() => setselect('fb')} onMouseLeave={() => setselect('none')} url="https://www.facebook.com/bhargavasai.macha/" style={{ marginRight: 15, height: 35, width: 35, opacity: select === 'fb' ? 1 : select === 'none' ? 1 : 0.2 }} />
                <SocialIcon onMouseEnter={() => setselect('mail')} onMouseLeave={() => setselect('none')} url="mailto:mbsai29@gmail.com" style={{ marginRight: 15, height: 35, width: 35, opacity: select === 'mail' ? 1 : select === 'none' ? 1 : 0.2 }} />
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} sm={7}>
            <div style={{ backgroundColor: 'lightgreen', color: 'black', }}>
              <div style={{ marginLeft: 40 }}>
                <br />
                <p style={{ marginTop: 0, fontSize: 30 }}>SKILLS NGINX CHECK</p>
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
                <p style={{ marginTop: 0, fontSize: 30 }}>PROJECTS</p>
                <Projects />
                <br />
                <br />
              </div>
            </div>
            <div style={{ backgroundColor: '#fed8b1', color: 'black', }}>
              <div style={{ marginLeft: 40 }}>
                <br />
                <p style={{ marginTop: 0, fontSize: 30 }}>CERTIFICATIONS</p>
                <Certifications />
                <br />
                <br />
              </div>
            </div>
            <div style={{ backgroundColor: '#d58cff', color: 'black', marginBottom: -40 }}>
              <div style={{ marginLeft: 40 }}>
                <br />
                <p style={{ marginTop: 0, fontSize: 30 }}>CONTACT ME</p>
                <Contact />
                <br />
                <br />
              </div>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
