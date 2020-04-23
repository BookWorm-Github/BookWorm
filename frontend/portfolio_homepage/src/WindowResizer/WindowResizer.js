import React, { Component } from 'react';

import PropTypes from 'prop-types';

/*determines number of books to display per row*/
class WindowResizer extends Component {

  constructor() {
    super();
    this.state = {
      width:  800,
      height: 182,
      bookSize: 320
    }
  }

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    
      let update_width  = window.innerWidth-100;
      let update_height = Math.round(update_width/4.4);
      this.setState({ width: update_width, height: update_height });
      this.props.setNumBksPerShelf(Math.round(update_width/this.state.bookSize));
      
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    return(
      <div> 
      </div>
    );
  }

}

WindowResizer.propTypes = {
    
  setNumBksPerShelf: PropTypes.func.isRequired
  };
export default WindowResizer;