
//The container that holds the books
import React, {Component} from 'react'

import PropTypes from 'prop-types'
import axios from 'axios'
//https://urlmeta.org/
//import $ from 'jquery'
//import WebTitleFetcher from '../experiments/webtitlefetcher.php'
//import '../experiments/get_external_content.php'
// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
class TitleFetcher extends Component{

	constructor(props){
	    super(props);
	    this.state = {
	      titles:[]
	    };

  	}
  	componentDidMount(){
  		this.getTitles();
  		
  	}
	render(){

		return (
				<div>
					<ul>
        			{ this.state.titles.map(title => <li>{title}</li>)}
      				</ul>
				</div>
		);
	}

	getTitles = () =>{
		console.log("titlefetcher has "+this.props.urls.length+" urls");
		for(var i = 0; i<this.props.urls.length; i++){
			
			this.getTitle(this.props.urls[i])

		}

	}


	getTitle=(url)=>{
		var title = "";
		var xhr = new XMLHttpRequest();
		xhr.open("GET", url, true);
		xhr.onreadystatechange = function() { 
		  if (xhr.readyState == 4) {
		    var fetchTitle = (/<title>(.*?)<\/title>/m).exec(xhr.responseText);
		    if(fetchTitle!=null){ //if the title could be fetched per cors policy
			    title = fetchTitle[1];
			    alert(title);
			    this.setState(
			      {
			        titles: [...this.state.titles, title]
			      }
			    );
			}
		  }
		}
		xhr.send();
	}



	


}


TitleFetcher.propTypes = {
    urls: PropTypes.arrayOf(PropTypes.string).isRequired
  };

export default TitleFetcher;
