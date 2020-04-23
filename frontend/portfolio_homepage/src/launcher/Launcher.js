
//The container that holds the books
import React, {Component} from 'react'
import './launcher.css'
import PropTypes from 'prop-types'
import TitleFetcher from '../urlTitleFetcher/TitleFetcher'
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
					<TitleFetcher urls = {this.props.urls} />
				</div>
		);
	}

	openURLs = (e) =>{

		e.preventDefault();
		for(let i = 0; i<this.props.urls.length; i++){
			window.open(this.props.urls[i], '_blank', 'width=1000');
		}

	}

	// getTitle(url){
	// 		var title = "";
	// 		var xhr = new XMLHttpRequest();
	// 		xhr.open("GET", url, true);
	// 		xhr.onreadystatechange = function() { 
	// 		  if (xhr.readyState == 4) {
	// 		    var fetchTitle = (/<title>(.*?)<\/title>/m).exec(xhr.responseText);
	// 		    if(fetchTitle!=null){ //if the title could be fetched per cors policy
	// 			    title = fetchTitle[1];
	// 			    alert(title);
	// 			}
	// 		  }
	// 		}
	// 		xhr.send();
	// 		return title;
	// 	}


}


Launcher.propTypes = {
    urls: PropTypes.arrayOf(PropTypes.string)
  };

export default Launcher;
