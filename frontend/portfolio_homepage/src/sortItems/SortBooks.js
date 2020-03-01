//The sort button
import React, {Component} from 'react'
import PropTypes from 'prop-types'; // ES6


  const ASC = 'ascending';
	const DSC = 'descending';
class SortBooks extends Component{

  constructor(){
    super();
    this.state = {
    	books: []
    };
  }


	render(){

		return (
			<div>
			<h6>Sort By: </h6>
				<button onClick={this.sortByTitle}>Title</button> 
			</div>
		);
	}

	
	sortByTitle = () =>{
		var books = [...this.props.books];
		//custom compare function for title
		function compareTitle(a, b, order = DSC) {
		    const diff = a.title.toLowerCase().localeCompare(b.title.toLowerCase());

		    if (order === ASC) {
		        return diff;

		console.log("Order is ASC");
		    }

		    return -1 * diff;
		}

		books.sort((a, b) => compareTitle(a, b, DSC))

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