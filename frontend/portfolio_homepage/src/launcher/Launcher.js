
//The container that holds the books
import React, {Component} from 'react'
import './launcher.css'
import PropTypes from 'prop-types'
//https://urlmeta.org/
//import $ from 'jquery'
//import WebTitleFetcher from '../experiments/webtitlefetcher.php'
//import '../experiments/get_external_content.php'
// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
class Launcher extends Component{


	render(){

		return (
				<div className = 'launcher' onClick = {this.openURLs}>
					Launcher
					
				</div>
		);
	}

	openURLs = (e) =>{
		e.preventDefault();
		for(let i = 0; i<this.props.urls.length; i++){
	    	window.open(this.props.urls[i]);
		}
	}


}


Launcher.propTypes = {
    urls: PropTypes.arrayOf(PropTypes.string)
  };

export default Launcher;
