import React, { Component } from 'react';
import './App.css';
import BookAppMain from './books/BookAppMain';
import {AuthNavBar} from "./firebase/auth/AuthNavBar";
// import {getCurrentTab} from "./experiment/common/Utils";
//TODO currently clumsy way of dealing with the chrome extension connection error in the local host main page.

class App extends Component{
    constructor() {
        super();
    }
	render(){
		  return (
			<div className="App">
				<AuthNavBar/>
				<h1>BookWorm</h1>
				<BookAppMain />
			</div> )
	}
}

export default App;
