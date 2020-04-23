
//The container that holds the books
import React, {Component} from 'react'

import PropTypes from 'prop-types'
import './url-entry.css'
// import { withStyles } from '@material-ui/core/styles';
//npm i react-simple-flex-grid
 import '../books/bookStyles.css'
class ManualEntryOfURL extends Component{
handleFocus = (event) => event.target.select();
  constructor(props){
    super(props);
    this.state = {

      urls: ['https://www.github.com/']
    };
  }

//if user is hovering over album, show launch
//else show title

  render() {  
    return <div className = "url-entry-box-container">
                <form onSubmit={this.manuallyAddURL}>
                  <input ref={(t) => this._inputURL = t}
                    defaultValue="https://www.google.com">
                  </input>
                  <button type="submit">add</button>
                </form>
            </div>
  } 


  

  manuallyAddURL = (e) =>{

      e.preventDefault();
      //TODO in future put date label on URLs
      // var _newURL = {
      //   key: Date.now(),
      //   url: this._inputURL.value
      // };
      
   
     this.props.setLaunchURLs(this._inputURL.value);
     this.props.setWormholeURLs(this._inputURL.value);
     
      this._inputURL.value = "";

  }




}
ManualEntryOfURL.propTypes = {
    setLaunchURLs: PropTypes.func.isRequired,

    setWormholeURLs: PropTypes.func.isRequired
  };
export default ManualEntryOfURL;

