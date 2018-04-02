import React, { Component } from 'react';
import '../css/style.css';
//import $ from 'jquery';
//import jQuery from'jquery';
import {Link} from 'react-router-dom';



class Header extends Component {
 	constructor(){
 		super();
 		this.state={
 			file:"http://boxoutfm.out.airtime.pro:8000/boxoutfm_a",
 	        is_playing:false,
 	     };
 	}
 	togglePlay(){
 		if(!this.state.is_playing){
 		this.refs.player.play();
 		this.setState({is_playing:true,
        }) 

 	}else{
 		this.refs.player.pause();
 		this.setState({is_playing:false})
 	}}



 		render() {
 		   return ( 
	<header className="container-fluid fixed-top" id="header">
		<div className="row" id="radioBar">
			<div className="col-auto d-flex align-items-center justify-content-center" id="radio-controls">
				  <a onClick={this.togglePlay.bind(this)}  href="javascript:void();">   
          <i className={!this.state.is_playing ? "icons icon-play text-primary icon-5x":"icons icon-pause text-primary icon-5x"}  role="button"></i></a>
              <audio ref="player" autoPlayer={this.state.playing} controls id="video" className="radio-stream" style={{display:'none'}}>
             <source src={this.state.file} type="audio/mpeg"/>
          </audio>
			</div>
			<div className="col-auto d-none d-md-flex">
				<a className="navbar-brand py-0 mr-0 h-100 w-100 d-flex align-items-center justify-content-center" href="./">
					<img className="img-fluid" alt="BoxoutFM" src="./images/logo.svg" style={{height:23}}/>
				</a>
			</div>
			<div className="col-auto">
				<i className="icons icon-radio-waves"></i>
			</div>
			<div className="col col-sm-auto h4 mb-0 pt-1">
				<span className="current-artist-name">Artist Name</span> - 
				<span className="current-episode-name">Episode Name</span>
			</div>
			<div className="col-auto ml-auto d-none d-md-flex border-left">
				<a href="./search" className="icons icon-search"></a>
			</div>											
			<div className="col-3 d-none d-md-flex border-left" id="whatsPlaying" role="button" data-toggle="collapse" data-target="#trackInfo" aria-expanded="false" aria-controls="trackInfo">
				<div className="row align-items-center w-100 mx-0 toggleInfo">
					<div className="col pt-1 px-0">
						<span>What’s playing?</span>
					</div>
					<div className="col px-0 text-right d-flex align-items-center justify-content-end">
						<i className="icons icon-chevron-down"></i>
					</div>
				</div>
				<div className="collapse" id="trackInfo">
					<div className="row mx-0">
						<div className="col-auto p-0 bg-primary-gradient" style={{width:125}}>
							<img alt="album art" className="float-left" src="./images/krupkaro.jpg" title="" height="125" width="125"/>
						</div>
						<div className="col pt-2 ml-auto flex-column align-items-start">
							<h5 className="title font-medium">Show name in upto two lines can go here</h5>
							<h5 className="artist">by Host Name</h5>
							<h6 className="trackNumber font-light">Episode No: 101</h6>
							<h6 className="description mb-0">Tweet length description about the currently playing episode 140 ch going into three lines</h6>
						</div>
					</div>
					<div className="row mx-0 genre">
						<div className="col px-1">								
							<span className="badge w-100">World Music</span> 
						</div>
						<div className="col px-1">								
							<span className="badge w-100">Techno</span> 
						</div>
						<div className="col px-1">								
							<span className="badge w-100">Hardfloor</span> 
						</div>
					</div>
				</div>   
			</div>
		    <div className="col-auto d-sm-none d-md-block" id="volumeBar" role="button" data-toggle="collapse" data-target="#volumeControl" aria-expanded="false" aria-controls="volumeControl">
            <i className="icons icon-volume" />
              <input type="range" className="collapse" id="volumeControl" Value={100} min={0} max={80} title={80} />
          </div>      
        </div>
		<div className="row align-items-center bg-primary" id="navBar">
			<div className="col-auto d-none d-md-block" style={{width:100}}>
			</div>
			<div className="col-md-auto">
				<nav className="navbar navbar-expand-md navbar-light p-0 bg-transparent">		
					<h3 className="navbar-brand d-block d-md-none py-0 h3 mb-0 text-white mr-auto">
						<img className="img-fluid" alt="BoxoutFM" src="./images/logo-white.svg" style={{height:30}}/>
					</h3>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
						<i className="icons icon-chevron-down"></i>
					</button>

					<div className="collapse navbar-collapse" id="mainMenu">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								 <Link to="./" className="nav-link">Home</Link>
							</li>
							<li className="nav-item">
								<Link to="./schedule" className="nav-link" >Schedule</Link>
							</li>
							<li className="nav-item">
								<Link to="./shows" className="nav-link" >Shows</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="./videos">Videos</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="./events">Events</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="./label">Label</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="./hosts">Hosts</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="./about">About</a>
							</li>
						</ul>
					</div>
				</nav>		
			</div>
			<div className="col-sm-3 d-none d-lg-block ml-auto">
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
	</header>





	    	  );
  	}}
  	export default Header;
  	 