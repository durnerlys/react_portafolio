import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from './Skills';
import Durnerlys from '../images/durnerlys.jpg'


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          	<Cell col={4}>
            	<div style={{textAlign: 'center'}}>
              	<img
                	src={Durnerlys}
                	alt="avatar"
                	style={{height: '200px'}}
                />
            	</div>
	            	<h2 style={{paddingTop: '1em'}}>Durnerlys Velásquez</h2>
	            	<h4 style={{color: 'grey'}}>Ingeniera de Sistemas</h4>
	            	<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
	            	<p>Ingeniera de Sistemas con enfoque multidisciplinario en áreas de la administración de tecnologías, especialmente con afinidad al desarrollo y estructuración de proyectos web.</p>
	            	<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
	            	<h5>Dirección</h5>
	            	<p>Parroquia Sucre, Caracas</p>
	            	<h5>Teléfono</h5>
	            	<p>(+58) 2245813</p>
	            	<h5>Email</h5>
	            	<p>durnerlys@gmail.com</p>
	            	<h5>Web</h5>
	            	<p>mywebsite.com</p>
	            	<hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          	</Cell>
         	<Cell className="resume-right-col" col={8}>
      			
      			<h2>Educación</h2>

		            <Education
		              startYear={2012}
		              endYear={2018}
		              schoolName="UNIVERSIDAD GRAN MARISCAL DE AYACUCHO"
		              schoolDescription="Título obtenido: Ingeniera de Sistemas."
		            />

            	<h2>Experience</h2>

		            <Experience
		              startYear={2015}
		              endYear={2017}
		              jobName="CORPORACIÓN CABRERA ROJAS, C. A."
		              jobDescription="Mantenimiento de computadoras, instalación de software, revisión de equipos."
		            />

	            	<Experience
	                startYear={2017}
	                endYear={2018}
	                jobName="GOBERNACIÓN DEL ESTADO BOLÍVAR, DIRECCIÓN DE INFORMÁTICA Y SISTEMAS"
	                jobDescription="Soporte técnico de computadoras, bases de datos, desarrollo web con Laravel"
	            	/>

            	<hr style={{borderTop: '3px solid #e22947'}} />
            	<h2>Skills</h2>
            		<Skills
                	/>
          	</Cell>
        </Grid>
    </div>
    )
  }
}

export default Resume;