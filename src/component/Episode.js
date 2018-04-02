import React, { Component } from 'react';

import '../css/style.css';

class Episode extends Component {
		render() {
 		   return (<div>
 		   		<section className="container-fluid px-0 episodeDetails">
		<h1>Episode</h1>
		<div className="row mx-0">
			<div className="col-12 col-sm-auto p-0 albumArt">					
				<img className="img-fluid" src="../images/krupkaro.jpg" alt="show name" width="100%" height="auto"/>
			</div>
			<div className="col">
				<div className="card card-body border-0 h-100">
					<h3 className="text-primary">Name of the mix that can be upto a certain length upto 3 lines max</h3>

					<h4>Episode xx</h4>

					<div className="genre">
						<span className="badge mr-1">World Music</span>
						<span className="badge mr-1">Techno</span> 
						<span className="badge mr-1">Hardfloor</span>
						<span className="badge mr-1">Techno</span> 
						<span className="badge mr-1">Hardfloor</span>
					</div>

					<ul className="nav nav-pills mb-3">
						<li className="nav-item fb">
							<a className="nav-link" href="https://www.facebook.com/boxoutfm" target="_blank">
								<i className="icons icon-facebook icon-2x text-primary"></i>
							</a>
						</li>
						<li className="nav-item twitter">
							<a className="nav-link" href="https://twitter.com/boxoutfm" target="_blank">
								<i className="icons icon-twitter icon-2x text-primary"></i>
							</a>
						</li>
					</ul>

					<p className="card-text">There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station whether that is on the deck of your home or having a powerful but mobile telescope set up to take to the remove countryside to really get a good shot at some breath taking star gazing.<br/><br/>
					The last thing we would want to do is to take away any of the “fun” of your hobby of astronomy because the joy of what we do as star gazers is a big part of the appeal. But unlike many other hobbies, ours is a passion of science, of learning and of discovery. And don’t kid yourself, even a hobbyist with a limited telescopic set up can see some amazing things in the stars. So let’s be sure you invest in a solid piece of equipment that you can continue to grow with as your knowledge and ability as an astronomer grows. But how do we do that?<br/><br/>
					do as star gazers is a big part of the appeal. But unlike many other hobbies, ours is a passion of science, of learning and of discovery. And don’t kid yourself, even a hobbyist with a limited telescopic set up can see some amazing things in the stars. So let’s be sure you invest in a solid piece of equipment that you can continue to grow with as your knowledge and ability as an astronomer grows. But how do we do that?</p>

					<button className="btn btn-primary">
						<span className="h3 mb-0">Play the episode</span>
						<i className="icons icon-play"></i>
					</button>
				</div>
			</div>
		</div>
	</section>
	  
	<section className="container-wrapper" className="Episode">
		<section className="container-fluid tracks">
			<h1 className="text-primary">Tracklist</h1>
			<div className="row h3">
				<div className="col-12 mb-2">
					Artist name - Song name
				</div>
				<div className="col-12 mb-2">
					Artist name - Song name
				</div>
				<div className="col-12 mb-2">
					Artist name - Song name
				</div>
				<div className="col-12 mb-2">
					Artist name - Song name
				</div>
				<div className="col-12 mb-2">
					Artist name - Song name
				</div>
			</div>
		</section>
	</section>


</div>


 		   	  	    	  );
  	}}
  	export default Episode;
  	 