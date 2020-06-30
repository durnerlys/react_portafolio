import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl' 
import './App.css';
import Main from './components/Main'
import { Link } from 'react-router-dom'


function App() {
  return (
    <div>
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Portafolio</Link>} scroll>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/skills">Skills</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Presentación</Link>}>
                    <Navigation>
                      <Link to="/skills">Skills</Link>
                      <Link to="/resume">Resume</Link>
                      <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
               <Content>
                   <Main/>
               </Content>
            </Layout>
        </div>
    </div>

  );
}

export default App;

