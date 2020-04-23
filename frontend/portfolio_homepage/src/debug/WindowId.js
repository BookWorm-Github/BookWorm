
//The container that holds the books
import React, {Component} from 'react'

// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
import PropTypes from 'prop-types'

class WindowId extends Component{

  constructor(props){
    super(props);
    this.state = {
      linkedWindow: -999
      // launchURLs: ['https://www.github.com/'],
      // wormholeURLs:['https://www.github.com/','https://www.google.com/search?sxsrf=ALeKk03xO56CXGouNmYNfOx9L3LEpIKKrQ%3A1585511879738&ei=x_2AXofVLMusytMPvui78AI&q=when+will+coronavirus+end&oq=when+will+&gs_lcp=CgZwc3ktYWIQAxgAMgQIIxAnMgQIIxAnMgUIABCDATIFCAAQgwEyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEEc6BggAEBYQHjoFCAAQzQI6BwgAEBQQhwI6BwgjEOoCECc6BQgAEJECOgQIABBDUOcpWM1kYPBsaARwAngDgAGJAogBrCqSAQczMi4xOC4zmAEAoAEBqgEHZ3dzLXdperABCg&sclient=psy-ab']
    };
  }
  componentDidMount=() =>{
  		if(this.props.linkedWindowId==null)
  			alert('linked window is null')
		this.setState({
			linkedWindow: this.props.linkedWindowId
		});
	}
	  


	render(){

		return (
			<div>
			linkedWindow: {this.props.linkedWindowId} 
			</div>
		);
	}






}

	
WindowId.propTypes = {
	
	linkedWindowId: PropTypes.number.isRequired,
};


export default WindowId;