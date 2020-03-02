//The sort button
import React, {Component} from 'react'
import PropTypes from 'prop-types'; // ES6
import {MDBBtnGroup, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import './sort-btns.css'

const ASC = 'ascending';
const DSC = 'descending';

const sortBy = {
	NONE: 'None',
    TITLE: 'Title',
    DATE_CREATED: 'Date Created'
}


class SortBooks extends Component{

  constructor(){
    super();
    this.state = {
    	sortCriteria: sortBy.NONE,
    	order: ASC,
    	books: []
    };
  }


	render(){

		return (
			<div>
				<MDBBtnGroup className="sort-btn-container">
				Sort By:
				      <MDBDropdown size = "sm">

				        <MDBDropdownToggle caret color = "info">
				          {this.state.sortCriteria}
				        </MDBDropdownToggle>

				        <MDBDropdownMenu>
				          <MDBDropdownItem onClick={() =>{this.sort(sortBy.TITLE)}}>{sortBy.TITLE}</MDBDropdownItem>

				           <MDBDropdownItem onClick={() =>{this.sort(sortBy.DATE_CREATED)}}>
				           {sortBy.DATE_CREATED}
				           </MDBDropdownItem>
				       
				        </MDBDropdownMenu>
				        
				      </MDBDropdown>
				  </MDBBtnGroup>

			</div>
		);
	}

	sort = (criteria=sortBy.TITLE) =>{
		switch(criteria){
			case sortBy.TITLE:
				this.sortByTitle();
			break;
		    case sortBy.DATE_CREATED:
				this.sortByDateCreated();
		    break;
		}
	}

	toggleOrder = () =>{
		this.state.order===ASC? this.setState({order:DSC}) : this.setState({order:ASC})
		this.sortByTitle();
	}
	
	sortByTitle = () =>{
		this.setState({sortCriteria: sortBy.TITLE})
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

	sortByDateCreated = () =>{
		this.setState({sortCriteria: sortBy.DATE_CREATED})
		console.log("Sort by date created has not been implemented")
		alert("Sort by date created has not been implemented")
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