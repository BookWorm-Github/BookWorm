
import React, { Component } from 'react';
import './App.css';

import BookAppMain from './books/BookAppMain';
// import {getCurrentTab} from "./experiment/common/Utils";


class App extends Component{
    constructor(props) {
        super(props);
        
    }

	render(){
		  return (
		    <div className="App">

    			<button id="app-btn">App Button- Get URLs</button>
    			<div id = "url-list"><ul></ul></div>
		  		<h1>BookWorm</h1>
		  		<div>
		      <BookAppMain />
		      </div>
		    </div>
		  );
	}


} 

export default App;
