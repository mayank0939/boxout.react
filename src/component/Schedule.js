import React, { Component } from 'react';

class Schedule extends Component {
 		render() {
 		   return ( 

<section className="container-fluid schedules">
			<h1>Schedules</h1>
			<div className="row">
				<div className="col-12 col-sm-1 text-nowrap">					
					<span className="h4">12am - 12pm</span>
				</div>
				<div className="col-12 col-sm-11">					
					<h4 className="title mb-1">Host name - Show name</h4>
					<p className="description mb-2">Back again at the club for our weekly residency. Closing the night we have Producer, DJ and Radio host Spryk laying waste to the dance floor.</p>
					<div className="genre">
						<span className="badge mr-1">World Music</span>
						<span className="badge mr-1">Techno</span> 
						<span className="badge mr-1">Hardfloor</span>
					</div>
				</div>
			</div>
		</section>



	    	  );
  	}}
  	export default Schedule;
  	 