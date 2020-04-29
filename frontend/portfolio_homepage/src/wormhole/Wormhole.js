import React, {Component} from 'react'
import './wormhole.css'
import PropTypes from 'prop-types'
import TitleFetcher from '../urlTitleFetcher/TitleFetcher'
import $ from 'jquery'

/*Full list of URLs in a book. When you click on the URL, it opens that link??*/
const regex = "%=";
class Wormhole extends Component{

  constructor(props){
    super(props);
    this.state = {
      book: null,
      searchResults:[], 
      wormhole: [],
      titles:[]//an entry of titles is in this format : title%=url where title is page title and url is the url of the page
    };
  }
  componentDidMount =() =>{
    this.setState({
      book: this.props.book,
      wormhole: this.props.book.WormHole
    });

       function fetchHTML(externalUrl,state,cb){
      $.ajax({
        url: externalUrl,
        async: true,
        success: function(data) {
          const matches = data.match(/<title(.*?)<\/title>/);
          
            //console.log("Titles inside is "+titles.toString());
          cb(externalUrl,matches[0]);
        }   
      });
    }

    if(this.props.book.WormHole!=null){
      for(let i = 0; i<this.props.book.WormHole.length; i++){
          if(!this.props.book.WormHole[i].includes('chrome://')&&!this.props.book.WormHole[i].includes('chrome-extension://'))
          fetchHTML(this.props.book.WormHole[i],this.state.titles,this.callback);
      }
    }
    console.log("Wormhole for book "+this.props.book.title+" is "+this.props.book.WormHole.toString());

  }

  callback = (url,t) => {
    //console.log("Param in callback is "+t.toString());
    //state.push(t);
    function stripHTMLTags(str) {
      // var s1 = str.replace('<title>', '');

      // var s2 = s1.replace('</title>', '');
      const stripedHtml = $("<div>").html(str).text();
      return stripedHtml;
    }
    var title = stripHTMLTags(t)+regex+url;

    
    this.setState({titles: [...this.state.titles,title]}, this.setState({searchResults:this.state.titles}))
    console.log("Wormhole.js In callback state is "+this.state.titles.toString());

  }


	render(){

		return (

				<div className = 'popup'>
				<div>
          <div class="title">
					<p className="titlep">Wormhole</p>
          </div>
					<form>
            <div className="forma">
            <img src = "/search.svg" alt="search icon" height="28" width="28" className="logo"></img>
  					<input className="input" type="text" onChange={this.filterURLs} placeholder="Search..." />
            </div>
          </form>
              <button onClick={()=>this.props.toggleWormhole(-1)}>Back</button>
                    <ul className = 'wormhole-list'>
                        {this.state.searchResults.map(item => (
                          <li>
                          {/*<li  key={item} style={{listStyleImage: 'url('+this.getBaseUrl(item)+'/favicon.ico)'}}>*/}
                            <span>
                            <a href = {item.toLowerCase().split(regex)[1]} target = '_blank'>
                                {item.toLowerCase().split(regex)[0]} &nbsp;                        
                            </a>
                            </span>
                            
                            </li>
                        ))}
                    </ul>

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
      currentList = this.state.titles;
      // console.log("In filter urls for book"+this.props.book.title+", the wormhole is "+currentList.toString())
			// Use .filter() to determine which items should be displayed
			// based on the search terms
      newList = currentList.filter(item => {
				// change current item to lowercase and searh only the part before the regex
        const lc = item.toLowerCase().split(regex)[0];
				// change search term to lowercase
        const filter = e.target.value.toLowerCase();
				// check to see if the current list item includes the search term
				// If it does, it will be added to newList. Using lowercase eliminates
				// issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
			// If the search bar is empty, set newList to original task list: do we want this effect?
      newList = this.state.titles
    }
    //console.log("filtered List in book "+this.props.book.title+" wormhole is "+newList);
		// Set the filtered state based on what our rules added to newList
    this.setState({
      searchResults: newList
    });
	}


}


Wormhole.propTypes = {
    book: PropTypes.shape({
      key: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      linkedWindowId: PropTypes.number.isRequired,
      Launch: PropTypes.array.isRequired,
      WormHole: PropTypes.array.isRequired
    })
  };


export default Wormhole;