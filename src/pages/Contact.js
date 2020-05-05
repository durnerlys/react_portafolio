import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Durnerlys from '../images/durnerlys.jpg'

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Durnerlys Velásquez</h2>
            <img className="img-avatar"
              src={ Durnerlys }
              alt="durnerlys"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Ingeniera de Sistemas con enfoque multidisciplinario en áreas de la administración de tecnologías, especialmente con afinidad al desarrollo y estructuración de proyectos web.</p>

          </Cell>
         
          <Cell col={6}>
            
            <h2>Contáctame</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Allan'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    	+58 416 2245813 
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Allan'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                   		0212 678 5432
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Allan'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/> 
                    Durnerlys@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin" aria-hidden="true"/>
                    Durnerlys
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;