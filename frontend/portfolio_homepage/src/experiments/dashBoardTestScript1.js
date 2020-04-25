
import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Book from './Book'
//npm install @material-ui/core
//npm install mbdreact
import './bookStyles.css'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class BookShelf extends Component {

  constructor(){
    super();
    this.state = {
      addingBook: false,
      title: null
    };
  }

  render(){

    return (
      <MDBContainer>
  <MDBRow>
    <MDBCol md="4"><Book/></MDBCol>
    <MDBCol md="4">.col-md-4</MDBCol>
    <MDBCol md="4">.col-md-4</MDBCol>
  </MDBRow>
</MDBContainer>
    );
  }
}
export default (BookShelf);