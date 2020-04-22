import React, { Component } from 'react';
import { SketchPicker } from 'react-color'

class BackgroundColor extends Component{

	constructor(props) {
		super(props);
		this.state = {
		    background: '#fff176',
		    showColorPicker : false
		  };
	}

	componentDidMount(){
		document.body.style.backgroundColor = '#fff176';
	}
	

	 handleChangeComplete = (color) => {
    	this.setState({ background: color.hex });
    	document.body.style.backgroundColor = color.hex;
  	};
	render(){
		return (
			<div>
			<button onClick = {this.toggleColor}>Change Background Color</button>
			{this.state.showColorPicker?
		      <SketchPicker
		        color={ this.state.background }
		        onChangeComplete={ this.handleChangeComplete }
		      />:
		      <div></div>
		  	}
	      </div>
	    );
	}

	toggleColor = () =>{
		this.setState({
			showColorPicker: !this.state.showColorPicker
		})
	}
}

export default BackgroundColor;