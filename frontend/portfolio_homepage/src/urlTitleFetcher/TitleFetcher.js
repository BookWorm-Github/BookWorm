
//The container that holds the books
import React, {Component} from 'react'

import PropTypes from 'prop-types'
import axios from 'axios'
import $ from 'jquery'
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
  		// this.getTitles();
  		var titles = [];
  		

		function fetchHTML(externalUrl,state,cb){
			$.ajax({
			  url: externalUrl,
			  async: true,
			  success: function(data) {
			    var matches = data.match(/<title(.*?)<\/title>/);
			    //alert(matches[0]);
			    titles = [...titles,matches[0]];
			    	console.log("Titles inside is "+titles.toString());
			    cb(state,matches[0]);
			  }   
			});
		}

		
		
		for(var i = 0; i<this.props.urls.length; i++){

				fetchHTML(this.props.urls[i],this.state.titles,this.callback);
		}



  		
  		console.log("Titles outside is "+this.state.titles.toString());

  		

		// for(var i = 0; i<this.props.urls.length; i++){
		// 	var html = (await (await fetch(this.props.urls[i])).text()); // html as text
		// 	var doc = new DOMParser().parseFromString(html, 'text/html');
		// 	alert("Remote doc title is "+doc.title);
		// 	if(doc.title!=undefined)
		// 	this.setState(
		//       {
		//         titles: [...this.state.titles, doc.title]
		//       }
		//     );
		//     console.log("State in getHTML is "+this.state.titles.toString());
			

		// }
  		
  	}

  	callback = (state,t) => {
			console.log("Param in callback is "+t.toString());
			//state.push(t);
			function stripHTMLTags(str) {
				// var s1 = str.replace('<title>', '');

				// var s2 = s1.replace('</title>', '');
				var stripedHtml = $("<div>").html(str).text();
				return stripedHtml;
			}
			var title = stripHTMLTags(t);
			
			this.setState({titles: [...this.state.titles,title]})
			console.log("In callback state is "+this.state.titles.toString());

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

	// getTitles = () =>{
	// 	console.log("titlefetcher has "+this.props.urls.length+" urls");
	// 	for(var i = 0; i<this.props.urls.length; i++){
			
	// 		this.getHTML(this.props.urls[i])

	// 	}

	// }

	// getHTML =async  (url) =>{
	// 	var html = (await (await fetch(url)).text()); // html as text
	// 	var doc = new DOMParser().parseFromString(html, 'text/html');
	// 	alert("Remote doc title is "+doc.title);
	// 	this.setState(
	//       {
	//         titles: [...this.state.titles, doc.title]
	//       }
	//     );
	//     console.log("State in getHTML is "+this.state.titles.toString());
		
	// }


	// getTitle = (url) =>{
	// 	var title = "";
	// 	var xhr = new XMLHttpRequest();
	// 	xhr.open("GET", url, true);
	// 	xhr.onreadystatechange = function() { 
	// 	  if (xhr.readyState == 4) {
	// 	    var fetchTitle = (/<title>(.*?)<\/title>/m).exec(xhr.responseText);
	// 	    if(fetchTitle!=null){ //if the title could be fetched per cors policy
	// 		    title = fetchTitle[1];
	// 		    alert(title);
	// 		    this.setState(
	// 		      {
	// 		        titles: [...this.state.titles, title]
	// 		      }
	// 		    );
	// 		}
	// 	  }
	// 	}
	// 	xhr.send();
	// }



	


}


TitleFetcher.propTypes = {
    urls: PropTypes.arrayOf(PropTypes.string).isRequired
  };

export default TitleFetcher;
