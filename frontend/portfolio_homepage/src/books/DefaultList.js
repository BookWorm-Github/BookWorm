import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './bookStyles.css';
import Launcher from '../launcher/Launcher';

class DefaultList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			orderderedResults: [],
		};
	}


	render() {


		return (

			<div className='book-shelf'>
				<div className='scrolled'>
					<ul>
						{this.props.results.map((bookListItem) => <li><span>{bookListItem.title} <Launcher
							book={bookListItem} updateBook={this.props.updateBook} urls={bookListItem.Launch}/> </span>
						</li>)}
					</ul>
				</div>
				<br/>
				<br/>
				<button className='add-bk-btn' onClick={this.props.toggleAddBook}><h1 className='Plus'>+</h1>
				</button>
			</div>
		);
	};
}


DefaultList.propTypes = {
	results: PropTypes.arrayOf(PropTypes.shape({
		key: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		linkedWindowId: PropTypes.number,
		Launch: PropTypes.array.isRequired,
		WormHole: PropTypes.array.isRequired
	})),
	toggleAddBook: PropTypes.func.isRequired,

};


export default (DefaultList);
