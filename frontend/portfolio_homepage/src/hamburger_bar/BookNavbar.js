/*global chrome*/
import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
MDBHamburgerToggler } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {deLinkBookfromWindow} from "../firebase/firestore/db_functions";
import './BookNavbar.css';

class BookNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse1: false,
      collapseID: ''
    }
  }


toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}

toggleSingleCollapse = collapseId => {
  this.setState({
    ...this.state,
    [collapseId]: !this.state[collapseId]
  });
}

_cbWindowIdResponse(response) {
	let windowId = response.windowId;//this gets the current windowId
	if (windowId == null)
		alert('window id is null');
	this.setLinkedWindow(windowId);
}

setLinkedWindow = (windowId) =>{
	this.setState({
		linkedWindowId: windowId
	}, () =>{
		this.props.delinkBook(windowId)
		// this.props.updateBook(this.props.book,windowId,this.state.launchURLs,this.state.wormholeURLs)})
		this.props.updateBook(this.props.book, windowId, this.props.book.Launch, this.props.book.WormHole)
	})


}


render() {
  return (
    <Router>
      <MDBContainer>
        <navbar  style={{float: 'fixed-top'}}>
          <MDBContainer>
            
              <MDBCollapse isOpen={this.state.collapse1} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#!" onClick={() => this.props.deleteBook(this.props.book)}>Delete</MDBNavLink>
                  </MDBNavItem>
                    <MDBNavLink to="#!" onClick={() => chrome.runtime.sendMessage({rq: "getCurrWindowId"}, this._cbWindowIdResponse.bind(this))}>Link to book</MDBNavLink>
                  <MDBNavItem>
                  <MDBNavLink to="#!">Rename</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    {/*<MDBNavLink to="#!">Profile</MDBNavLink>*/}
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
              <button className="dots" id={this.props.book.key.toString()} onClick={()=> this.toggleSingleCollapse('collapse1')}>...</button>
          </MDBContainer>
        </navbar>
      </MDBContainer>
    </Router>
    );
  }
}

export default BookNavbar;