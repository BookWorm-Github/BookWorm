import React, {Component} from 'react'
import './wormhole.css'
import PropTypes from 'prop-types'

/*Full list of URLs in a book. When you click on the URL, it opens that link??*/
class Wormhole extends Component{

  constructor(props){
    super(props);
    this.state = {
      book: null
    };
  }
  componentDidMount =() =>{
    this.setState({
      book: this.props.book
    })
    console.log("Wormhole for book "+this.props.book.title+" is "+this.props.book.WormHole.toString());
    
  }


	render(){

		return (

				<div className = 'popup'>
				<div>
					<h3>Wormhole</h3>
					<form className="input" >
					<input type="text" onChange={this.props.filterURLs} placeholder="Search..." />
                    </form>
                    <ul className = 'wormhole-list'>
                        {this.props.searchResults.map(item => (
                          <li>
                          {/*<li  key={item} style={{listStyleImage: 'url('+this.getBaseUrl(item)+'/favicon.ico)'}}>*/}
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






}


Wormhole.propTypes = {
    book: PropTypes.shape({
      key: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      linkedWindowId: PropTypes.number.isRequired,
      Launch: PropTypes.array.isRequired,
      WormHole: PropTypes.array.isRequired
    }),
    filterURLs: PropTypes.func.isRequired,
    searchResults: PropTypes.func.isRequired,
  };


export default Wormhole;