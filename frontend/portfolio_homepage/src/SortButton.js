import React, {Component} from 'react';
import hamburger from './Images/filter.png'

class SortButton extends Component {

	render() {
		return (
			<input type="image" src={hamburger} onClick={this.props.toggleSortBooks}/>
		);
	};


}


export default (SortButton);
