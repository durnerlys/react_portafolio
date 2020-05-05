import React  from 'react';
import {Grid, Cell} from 'react-mdl'
import Avatar from '../images/avatar.jpg'


class IndexPage extends React.Component {
	render(){
		return (

			<div style={{width: '100%', margin: 'auto'}}>
			    <Grid className="landing-grid">

			        <Cell col={12}>
						<img  src={ Avatar } alt="Imagen" className="img-avatar" />
						<div className="banner-text">
							<h1>System Engineer & Web Developer</h1>
							
							<p>HTML | CSS | JAVASCRIPT | REACT | PHP | LARAVEL </p>
							<div className="social-links">
								<a href="https://www.linkedin.com/in/durnerlys/" rel="noopener noreferrer" target="_blank">
									<i className = "fa fa-linkedin-square" aria-hidden="true"/>
								</a>

								<a href="https://www.facebook.com/leonor.patete" rel="noopener noreferrer" target="_blank">
									<i className = "fa fa-facebook-square" aria-hidden="true"/>
								</a>

								<a href="https://github.com/durnerlys" rel="noopener noreferrer" target="_blank">
									<i className = "fa fa-github-square" aria-hidden="true"/>
								</a>
							</div>
						</div>
			        </Cell>

			    </Grid>
			</div>

		)
	}
}

export default IndexPage



