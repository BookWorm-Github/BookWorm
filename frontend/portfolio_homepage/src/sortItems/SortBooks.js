//The sort button
import React, {Component} from 'react'
import PropTypes from 'prop-types'; // ES6
import {MDBBtn, MDBBtnGroup, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from "mdbreact";
import './sort-btns.css'

const ASC = 'ascending';
const DSC = 'descending';

const sortBy = {
	NONE: 'None',
	TITLE: 'Title',
	DATE_CREATED: 'Date Created',
	LAST_ACCESSED: 'Last Accessed'
}


class SortBooks extends Component {

	constructor() {
		super();
		this.state = {
			sortCriteria: sortBy.NONE,
			order: ASC,
			books: []
		};
	}


	render() {

		return (
			<span className={this.props.isBlurred ? 'blur-bg' : 'clear-bg'}>
				<MDBBtnGroup className="sort-btn-container">
				<h6 id='sort'>Sort By:</h6>

				      <MDBDropdown size="sm">

				        <MDBDropdownToggle caret color='white'>
				          {this.state.sortCriteria}
				        </MDBDropdownToggle>

				        <MDBDropdownMenu>
				          <MDBDropdownItem onClick={() => {
					          this.sort(sortBy.TITLE)
				          }}>{sortBy.TITLE}</MDBDropdownItem>

				           <MDBDropdownItem onClick={() => {
					           this.sort(sortBy.DATE_CREATED)
				           }}>
				           {sortBy.DATE_CREATED}
				           </MDBDropdownItem>


				           <MDBDropdownItem onClick={() => {
					           this.sort(sortBy.LAST_ACCESSED)
				           }}>
				           {sortBy.LAST_ACCESSED}
				           </MDBDropdownItem>

				        </MDBDropdownMenu>

				      </MDBDropdown>
				      <MDBBtn size="sm" color='white' onClick={this.toggleOrder}>
				      		{this.state.order === ASC ? <div>&#9650;</div> : <div>&#9660;</div>}
				      </MDBBtn>
				  </MDBBtnGroup>

			</span>
		);
	}

	sort = (criteria = sortBy.TITLE) => {
		switch (criteria) {
			case sortBy.TITLE:
				this.sortByTitle();
				break;
			case sortBy.DATE_CREATED:
				this.sortByDateCreated();
				break;
			case sortBy.LAST_ACCESSED:
				this.sortByLastAccessed();
				break;
			default:
				break;
		}
	}

	toggleOrder = () => {
		this.state.order === ASC ? this.setState({order: DSC}) : this.setState({order: ASC})
		this.sort();
	}

	sortByTitle = () => {
		this.setState({sortCriteria: sortBy.TITLE})
		var books = [...this.props.books];

		//custom compare function for title
		function compareTitle(a, b, order = ASC) {
			const diff = a.title.toLowerCase().localeCompare(b.title.toLowerCase());

			//console.log("Diff is "+diff+", and order is "+order);
			if (order === ASC) {
				return diff;
			}

			return -1 * diff;
		}

		books.sort((a, b) => compareTitle(a, b, this.state.order))

		this.props.setBooks(books)
	}

	sortByDateCreated = () => {
		this.setState({sortCriteria: sortBy.DATE_CREATED})
		var books = [...this.props.books];

		//console.log("Sort by date created has not been implemented")

		function compareDates(a, b, order = ASC) {
			const diff = a.key - b.key;

			if (order === ASC) {
				return diff;
			}

			return -1 * diff;
		}

		books.sort((a, b) => compareDates(a, b, this.state.order));

		this.props.setBooks(books);

	}

	sortByLastAccessed = () => {
		this.setState({sortCriteria: sortBy.LAST_ACCESSED})
		//console.log("Sort by last accessed has not been implemented")

		alert("Sort by last accessed has not been implemented")
	}


}

SortBooks.propTypes = {
	books: PropTypes.arrayOf(PropTypes.shape({
		key: PropTypes.number,
		title: PropTypes.string.isRequired
	})),
	setBooks: PropTypes.func.isRequired

};

export default SortBooks;
