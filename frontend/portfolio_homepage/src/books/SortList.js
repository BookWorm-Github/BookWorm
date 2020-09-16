import React, {Component} from 'react'

class SortList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			mostRecentClicked: false,
			mostUsedClicked: false,
			azAscendingClicked: false,
			azDescendingClicked: false
		};
    }

    render() {

		return (

			<div>
				<h1>Sort by:</h1>
				<br></br>
				<button onClick={this.props.sortBooksNewest}>Most Recent</button>
				<br></br>
				<button onClick={this.props.sortBooksOldest}>Oldest</button>
				<br></br>
				<button onClick={this.props.sortBooksBackwards}>A-Z Descending</button>
				<br></br>
				<button onClick={this.props.sortBooksAlphabetically}>A-Z</button>
				<br></br>
				<p>...</p>
			</div>
		);
	};
}


export default (SortList);
