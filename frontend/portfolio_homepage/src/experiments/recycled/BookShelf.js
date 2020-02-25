//The container that holds the books
import React, {Component} from 'react'
//npm i react-simple-flex-grid
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import dummyList from '../dummydata/dummyList.json'

class BookShelf extends Component{

	render(){
		return (

		<Row gutter={40}>
	      {(dummyList).map(co => 
	        <Col 
	          xs={{ span: 6 }} sm={{ span: 4 }} md={{ span: 3 }}
	          lg={{ span: 2 }} xl={{ span: 1 }}
	        >

	        <img src={`${co.image}.jpg`} width="100%"/>

	        </Col>
	      )}
	    </Row>

		);
	}

}

export default BookShelf