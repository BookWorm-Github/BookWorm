  import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
MDBHamburgerToggler } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class BookNavbar extends Component {
state = {
  collapse1: false,
  collapseID: ''
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

render() {
  return (
    <Router>
      <MDBContainer>
        <MDBNavbar color="amber lighten-4" style={{float: 'fixed-top'}} light>
          <MDBContainer>
            <MDBHamburgerToggler color="#d3531a" id={this.props.book.key.toString()} onClick={()=> this.toggleSingleCollapse('collapse1')} />
              <MDBCollapse isOpen={this.state.collapse1} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#!" onClick={() => this.props.deleteBook(this.props.book)}>Delete</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    {/*<MDBNavLink to="#!">Link</MDBNavLink>*/}
                  </MDBNavItem>
                  <MDBNavItem>
                    {/*<MDBNavLink to="#!">Profile</MDBNavLink>*/}
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
    </Router>
    );
  }
}

export default BookNavbar;