//The sort button
import React, {Component} from 'react'
import PropTypes from 'prop-types'; // ES6


const ASC = 'ascending';
const DSC = 'descending';
class SortBooks extends Component{

  constructor(){
    super();
    this.state = {
    	order: ASC,
    	books: []
    };
  }


	render(){

		return (
			<div>
			<h6>Sort By: </h6>
				
				<button onClick={this.sortByTitle}>Title</button> 

				<button onClick={this.toggleOrder}>{this.state.order===ASC? ASC : DSC}</button> 
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