




//The container that holds the books
import React, {Component} from 'react'
import './launcher.css'

// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
class Launcher extends Component{

  constructor(){
    super();
    this.state = {
    	urls: ['https://www.github.com/','http://www.bu.edu/']
    };
  }
  /*For adding URL*/
	// componentDidUpdate(prevProps) {
	//   // Typical usage (don't forget to compare props):
	//   if (!(this.state.urls.contains(this.props.newURL))) { //
	//       this.setState(
	// 	      {
	// 	        urls: [...this.state.urls, this.props.newURL]
	// 	      }
	// 	    );
	//   }
	// }

	render(){

		return (
				<div className = 'launcher' onClick = {this.openURLs}>
					Launcher
					
				</div>
		);
	}

	openURLs = (e) =>{
		e.preventDefault();
		for(var i = 0; i<this.state.urls.length; i++)
	    window.open(this.state.urls[i]);
	}


}

export default Launcher;
