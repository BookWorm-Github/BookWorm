import PropTypes from 'prop-types'
import Book from './books/Book'


Book.propTypes = {
	  book: PropTypes.shape({
		    key: PropTypes.instanceOf(Number),
		    title: PropTypes.string.isRequired
		  }),
	};