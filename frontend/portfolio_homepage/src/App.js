/*global chrome*/
import React, { Component } from 'react';
import './App.css';

import BookAppMain from './books/BookAppMain'
// import {getCurrentTab} from "./experiments/common/Utils";


class App extends Component{
    constructor(props) {
        super(props);
        
    }
	render(){
		  return (
		    <div className="App">

		  		<h1>BookWorm</h1>
		      <BookAppMain />
		    </div>
		  );
	}


} 

export default App;
