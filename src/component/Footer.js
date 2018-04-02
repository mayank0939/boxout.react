import React, { Component } from 'react';
import '../css/style.css';
 class Footer extends Component {
add(event){
event.preventDefault();
console.log(this.refs.name.value);
console.log(this.refs.email.value);
this.refs.name.value=null;
this.refs.email.value=null;
}

  
  	render() {
	    return ( 

	<footer className="container-fluid bg-primary" id="footer">
		<div className="row">
			<div className="col-6 col-md-3 col-lg-1">
				<ul className="nav flex-column">
					<li className="nav-item">
						<strong>Contact</strong>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="./submit">Submit</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="./press">Press</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="./careers">Careers</a>
					</li>
				</ul>				
			</div>
			<div className="col-6 col-md-3 col-lg-1">
				<ul className="nav flex-column">
					<li className="nav-item">
						<strong>Editorial</strong>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="./blog">Blog</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="http://theplug.news">The Plug</a>
					</li>
				</ul>				
			</div>
			<div className="col-6 col-md-3 col-lg-1">
				<ul className="nav flex-column">
					<li className="nav-item">
						<strong>Support</strong>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="./donate">Donate</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="./shop">Shop</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="./feedback">Feedback</a>
					</li>
				</ul>				
			</div>
			<div className="col-6 col-md-3 col-lg-1">
				<ul className="nav flex-column">
					<li className="nav-item">
						<strong>Info</strong>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="./about">About</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="./terms">Terms</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="./privacy">Privacy</a>
					</li>
				</ul>				
			</div>
			
			<div className="col-12 col-md-6 col-lg-4">
				<strong className="px-0">Stay in the know</strong>
				<form method="post" accept-charset="UTF-8" validate>
					<div className="form-group">
						<label className="sr-only">Name*</label>
						<input type="text" className="form-control" name="name" placeholder="Name" value="" required/>
					</div>
					<div className="form-group">
						<label className="sr-only">Email*</label>
						<input type="email" className="form-control" name="email" placeholder="Email" value="" required/>
					</div>
					<div className="form-group mb-0">
						<button type="submit" className="btn btn-light btn-block text-left" role="button">Keep me posted</button>
					</div>
					<small>A carefully crafted update every now and then.<br/>We don’t spam.</small>
				</form>				
			</div>
			
			<div className="col-6 col-lg-4 d-flex align-items-center justify-content-end mx-auto mt-3 mb-4">
				<img className="img-fluid" alt="BoxoutFM" src="./images/logo-white.svg"/>
			</div>

			<div className="col-12 col-lg-4 mr-auto">
				<ul className="nav nav-pills nav-fill mb-0 social-icons">
					<li className="nav-item fb">
						<a className="nav-link" href="https://www.facebook.com/boxoutfm" target="_blank">
							<i className="icons icon-facebook"></i>
						</a>
					</li>
					<li className="nav-item mixcloud">
						<a className="nav-link" href="https://www.mixcloud.com/boxoutfm/" target="_blank">
							<i className="icons icon-mixcloud"></i>
						</a>
					</li>
					<li className="nav-item instagram">
						<a className="nav-link" href="https://www.instagram.com/boxoutfm/" target="_blank">
							<i className="icons icon-instagram"></i>

						</a>
					</li>
					<li className="nav-item twitter">
						<a className="nav-link" href="https://twitter.com/boxoutfm" target="_blank">
							<i className="icons icon-twitter"></i>
						</a>
					</li>
					<li className="nav-item youtube">
						<a className="nav-link" href="https://www.youtube.com/channel/UCU3LWJOboQXSQsjqLkUt5Hg" target="_blank">
							<i className="icons icon-youtube"></i>
						</a>
					</li>
					<li className="nav-item bandcamp">
						<a className="nav-link" href="https://boxoutfm.bandcamp.com/" target="_blank">
							<i className="icons icon-bandcamp"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</footer>

	    	  );
  	}}
  	export default Footer;
  	 