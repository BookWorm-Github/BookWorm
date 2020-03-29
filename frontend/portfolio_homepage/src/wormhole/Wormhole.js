
import React, {Component} from 'react'
import './wormhole.css'
import PropTypes from 'prop-types'

/*Full list of URLs in a book. When you click on the URL, it opens that link??*/
class Wormhole extends Component{

  constructor(props){
    super(props);
    this.state = {
      searchResults:[]
    };
  }


	render(){

		return (

				<div className = 'popup'>
				<div>
					<h3>Wormhole</h3>
					<form className="input" >
					<input type="text" onChange={this.filterURLs} placeholder="Search..." />
                    </form>
                    <ul className = 'wormhole-list'>
                        {this.state.searchResults.map(item => (
                          <li  key={item} style={{listStyleImage: 'url('+this.getBaseUrl(item)+'/favicon.ico)'}}>
                            <span>
                            <a>
                                {item} &nbsp;                        
                            </a>
                            </span>
                            
                            </li>
                        ))}
                    </ul>


          			<button onClick={()=>this.props.toggleWormhole(false)}>Back</button>
                    </div>
				</div>
		);
	}

  getBaseUrl = (url) => {
    var re = new RegExp(/^.*\//);
    return re.exec(url);
}




	filterURLs = (e) =>{
				// Variable to hold the original version of the list
    let currentList = [];
		// Variable to hold the filtered list before putting into state
    let newList = [];

		// If the search bar isn't empty
    if (e.target.value !== "") {
			// Assign the original list to currentList
      currentList = this.props.urls;

			// Use .filter() to determine which items should be displayed
			// based on the search terms
      newList = currentList.filter(item => {
				// change current item to lowercase
        const lc = item.toLowerCase();
				// change search term to lowercase
        const filter = e.target.value.toLowerCase();
				// check to see if the current list item includes the search term
				// If it does, it will be added to newList. Using lowercase eliminates
				// issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
			// If the search bar is empty, set newList to original task list: do we want this effect?
     // newList = this.props.urls;
    }
    console.log("newList in wormhole is "+newList.toString());
		// Set the filtered state based on what our rules added to newList
    this.setState({
      searchResults: newList
    });
	}


}


Wormhole.propTypes = {
    urls: PropTypes.arrayOf(PropTypes.string).isRequired,
    toggleWormhole: PropTypes.func.isRequired
  };

export default Wormhole;