import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const apiUrl  = 'http://api.boxout.fm/api';

class Shows extends Component {
constructor(){
		super();
		this.state = {
			shows: [],
			
		}
	}
	componentDidMount(){
		fetch( apiUrl + '/shows/', ).
		then((Response) => Response.json()).
		then((result) => 
		{
			console.log( result );
			this.setState({
				shows:result.results
			})
		})
	}
  	 		render() {
 		   return (
<section id="container-wrapper">
		<section className="container-fluid my-3 shows">
			<div className="row">
{
	this.state.shows.map((show,key)=> 		   
	
				<div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 show">
	           		<Link to={'/show/'+show.slug } >
	  				<div className="card">
						<div className="card-body">
							<img className="align-self-start mr-2 float-sm-left" src={show.image} alt="show name" width="110" height="110"/>
							<h4 className="title">{show.name}</h4>
							<p className="description">{show.description}</p>
						</div>
						<div className="card-footer">
							<span>Hosted by: Host 1 Host 2</span>
						</div>
					</div>
					</Link>
				</div>
			
)}
</div>
		</section>	
	</section>

 		   	    	  );
  	}}
  	export default Shows;
  	 