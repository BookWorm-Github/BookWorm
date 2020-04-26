  import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
MDBHamburgerToggler } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

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

render() {
  return (
    <Router>
      <MDBContainer>
        <navbar style={{float: 'fixed-top'}}>
          <MDBContainer>
            
              <MDBCollapse isOpen={this.state.collapse1} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#!" onClick={() => this.props.deleteBook(this.props.book)}>Delete</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavLink to="#!">Link to book</MDBNavLink>
                  <MDBNavItem>
                  <MDBNavLink to="#!">Rename</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    {/*<MDBNavLink to="#!">Profile</MDBNavLink>*/}
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
              <button id={this.props.book.key.toString()} onClick={()=> this.toggleSingleCollapse('collapse1')}>...</button>
          </MDBContainer>
        </navbar>
      </MDBContainer>
    </Router>
    );
  }
}

export default BookNavbar;