
//The container that holds the books
import React, {Component} from 'react'
import './launcher.css'
import PropTypes from 'prop-types'

// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
class Launcher extends Component{

  // constructor(){
  //   super();
  //   this.state = {
  //   	urls: ['https://www.github.com/','http://www.bu.edu/']
  //   };
  // }
 //  /*For adding URL*/
	// componentDidUpdate(prevProps) {
	// 	function contains(list,item) {  
	// 			console.log("Called contains in launcher update");
	//             return false; 
	//         }

	//   if (!(contains(this.state.urls,this.props.newURL))) { //
	//       this.addURL(this.props.newURL);
	//   }
	// }
	// addURL = (_newURL) =>{
		
	// 	this.setState(state => {
	//       const list = this.state.urls.push(_newURL);
	//       return {
	//         urls: list
	//       };
	//     });
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
		for(var i = 0; i<this.props.urls.length; i++){
	    	window.open(this.props.urls[i]);
		}
	}


}


Launcher.propTypes = {
    urls: PropTypes.arrayOf(PropTypes.string)
  };

export default Launcher;
