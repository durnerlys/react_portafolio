import React from  'react'
import IndexPage from '../pages/IndexPage'
import Contact from '../pages/Contact'
import Resume from '../pages/Resume'
import Skills from '../pages/Skills'
import { Switch, Route } from 'react-router-dom'

const Main = () => (
				<Switch>
					<Route exact path="/" component={IndexPage} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/resume" component={Resume} />
					<Route exact path="/skills" component={Skills} />
				</Switch>
	)

export default Main
