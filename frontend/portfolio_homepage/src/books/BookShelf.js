
import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Book from './Book'

import './bookStyles.css'

class BookShelf extends Component {

  constructor(){
    super();
    this.state = {
      books:[],
    };
  }
  render(){

    return (
        <div className='container'> 
           <Grid container spacing={3}>
                  <Grid item xs zeroMinWidth>
                    <Book />
                  </Grid>
                  <Grid item xs>
                    <Book />
                  </Grid>
                  <Grid item xs>
                    <Book />
                  </Grid>
                </Grid>

              <Grid container spacing={3}>
                <Grid item xs zeroMinWidth>
                  <Book ></Book>
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Book ></Book>
                </Grid>
                <Grid item xs zeroMinWidth>
                  
                </Grid>
              </Grid>

          </div>

    );
  }

 
}
export default (BookShelf);