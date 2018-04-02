import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import {withRouter} from 'react-router';

const apiUrl  = 'http://api.boxout.fm/api';

class Show extends Component {

constructor(){
		super();
		this.state = {
			show: {},
			
		}
	}
	componentDidMount(){
		console.log(this.props.match.params.showName)
		fetch( apiUrl + '/shows').
		then((Response) => Response.json()).
		then((result) => 
		{
			//console.log( result );
			this.setState({
				show:result
			})
		})
	}

		render() {

var show = this.state.show;
			
 		   return (<div>
<section className="container-fluid px-0 ">
		<div className="card showsBanner">
			<div className="card-body">
			<img className="align-self-start mr-2 float-sm-left" src="{show.image}" alt="show name" width="160" height="160"/>
					<h2 className="title">{show.name}</h2>
				<p className="description">{show.description}</p>
				<span className="hosts">Hosted by: {show.host[0].name}</span>
			</div>
		</div>
	</section>

	<section className="container-wrapper">
		<section className="container-fluid episodes">
			<div className="row h3">
				<span className="d-block d-sm-none">Extra Small Screen</span>
				<span className="d-none d-sm-block d-md-none">Small Screen</span>
				<span className="d-none d-md-block d-lg-none">Medium Screen</span>
				<span className="d-none d-lg-block d-xl-none">Large Screen</span>
				<span className="d-none d-xl-block">Extra Large Screen</span>				
			</div>
		</section>
           <section className="container-fluid episodes">
			<h1>Episodes</h1>
			<div className="row">
				<div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 episode">					
		<Link to="./Episode" >			<div className="card">
						<div className="card-body">
							<span className="description">Name of the mix that can be upto a certain length upto 3 lines max</span>
							<i className="icons icon-play" role="button"></i>
						</div>
					</div></Link>
				</div>
			</div>
		</section>
	
	</section>
	
</div>


 		   	  	    	  );
  	}}
  	export default Show;
  	 