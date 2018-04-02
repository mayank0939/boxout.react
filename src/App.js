import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import AppRouter from './AppRouter';
const baseUrl = 'http://localhost:3000';

 class App extends Component {
  	render() {
	    return ( 
                <div >
                <Header/>
               <AppRouter />
               <Footer/>
                </div>
           );
  	}}
  	export default App;
  	 