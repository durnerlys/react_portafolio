import React from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'


  

  class Skills extends React.Component {
	
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

	toggleCategories() {

	    if(this.state.activeTab === 0 ){
	    	return (
		   	<div className="skills-grid">
		    	<Card shadow={0} style={{width: '512px', margin: '10px'}}>
				    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://disenowebakus.net/imagenes/articulos/doctype-html5-definicion-de-tipo-de-documento.jpg) center / cover'}}></CardTitle>
				    <CardText>
				       	“HTML es un lenguaje de marcado que se utiliza para el desarrollo de páginas de Internet. Se trata de la siglas que corresponden a HyperText Markup Language, es decir, Lenguaje de Marcas de Hipertexto”. 
				    </CardText>
				    <CardActions border>
				        <Button colored href="https://es.wikipedia.org/wiki/HTML" target="_blank">Official Website</Button>
				    </CardActions>
				    <CardMenu style={{color: '#fff'}}>
				        <IconButton name="share" />
				    </CardMenu>
				</Card>
					    	<Card shadow={0} style={{width: '512px', margin: '10px'}}>
				    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://disenowebakus.net/imagenes/articulos/doctype-html5-definicion-de-tipo-de-documento.jpg) center / cover'}}></CardTitle>
				    <CardText>
				       	“HTML es un lenguaje de marcado que se utiliza para el desarrollo de páginas de Internet. Se trata de la siglas que corresponden a HyperText Markup Language, es decir, Lenguaje de Marcas de Hipertexto”. 
				    </CardText>
				    <CardActions border>
				        <Button colored href="https://es.wikipedia.org/wiki/HTML" target="_blank">Official Website</Button>
				    </CardActions>
				    <CardMenu style={{color: '#fff'}}>
				        <IconButton name="share" />
				    </CardMenu>
				</Card>

						    	<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
				    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://disenowebakus.net/imagenes/articulos/doctype-html5-definicion-de-tipo-de-documento.jpg) center / cover'}}></CardTitle>
				    <CardText>
				       	“HTML es un lenguaje de marcado que se utiliza para el desarrollo de páginas de Internet. Se trata de la siglas que corresponden a HyperText Markup Language, es decir, Lenguaje de Marcas de Hipertexto”. 
				    </CardText>
				    <CardActions border>
				        <Button colored href="https://es.wikipedia.org/wiki/HTML" target="_blank">Official Website</Button>
				    </CardActions>
				    <CardMenu style={{color: '#fff'}}>
				        <IconButton name="share" />
				    </CardMenu>
				</Card>
		   		

		   	</div>
			)

    	}else if(this.state.activeTab === 1){
	    	return (
		    	
		    	<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
				    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/pseudoclases-css-first-child-last-child-nth-child-t1.png) center / cover'}}></CardTitle>
				    <CardText>
					      CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.
				    </CardText>
				    <CardActions border>
				        <Button colored href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">Official Website</Button>
				    </CardActions>
				    <CardMenu style={{color: '#fff'}}>
				        <IconButton name="share" />
				    </CardMenu>
				</Card>
			)
    	}else if(this.state.activeTab === 2) {
	    	return (
		    	
		    	<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
				    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.filepicker.io/api/file/SVFQZQAyRpqJ31f6LNGe) center / cover'}}></CardTitle>
				    <CardText>
				       	React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. Han participado en el proyecto más de mil desarrolladores diferentes.
				    </CardText>
				    <CardActions border>
				        <Button colored href="https://es.reactjs.org/" target="_blank">Official Website</Button>
				    </CardActions>
				    <CardMenu style={{color: '#fff'}}>
				        <IconButton name="share" />
				    </CardMenu>
				</Card>
			)
    	}
	}

	render(){
		return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>HTML</Tab>
                    <Tab>CSS</Tab>
                    <Tab>React</Tab>
                </Tabs>

	                <Grid>
	                	<Cell col={12}>
                   			<div className="content">{this.toggleCategories()}</div>
	                	</Cell>
	                </Grid>

            </div>
		)
	}
}

export default Skills