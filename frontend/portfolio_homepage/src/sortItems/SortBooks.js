//The sort button
import React, {Component} from 'react'
import PropTypes from 'prop-types'; // ES6
import {MDBBtnGroup, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";


const ASC = 'ascending';
const DSC = 'descending';

const sortBy = {
    TITLE: 'Title',
    DATE_CREATED: 'Date Created'
}


class SortBooks extends Component{

  constructor(){
    super();
    this.state = {
    	sortCriteria: sortBy.TITLE,
    	order: ASC,
    	books: []
    };
  }


	render(){

		return (
			<div>
			<h6>Sort By: </h6>
				<MDBBtnGroup>
				      <MDBDropdown size = "xs">

				        <MDBDropdownToggle caret color="info" className="h-100">
				          {this.state.sortCriteria}
				        </MDBDropdownToggle>

				        <MDBDropdownMenu basic color="info">
				          <MDBDropdownItem onClick={this.sortByTitle}>{sortBy.TITLE}</MDBDropdownItem>
				        </MDBDropdownMenu>
				      </MDBDropdown>
				  </MDBBtnGroup>

			</div>
		);
	}

	toggleOrder = () =>{
		this.state.order===ASC? this.setState({order:DSC}) : this.setState({order:ASC})
		this.sortByTitle();
	}
	
	sortByTitle = () =>{
		var books = [...this.props.books];
		//custom compare function for title
		function compareTitle(a, b, order = ASC) {
		    const diff = a.title.toLowerCase().localeCompare(b.title.toLowerCase());

		console.log("Diff is "+diff+", and order is "+order);
		    if (order === ASC) {
		        return diff;
		    }

		    return -1 * diff;
		}

		books.sort((a, b) => compareTitle(a, b, this.state.order))

		this.props.setBooks(books)
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