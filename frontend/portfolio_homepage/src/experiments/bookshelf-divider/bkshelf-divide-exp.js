  divideBooksIntoRows = (booklist,numBooks) =>{
    var shelf = new Array(this.state.numBksPerShelf);
    var buffer = [];
    //set up first shelves
    var x;
    for(x = 0; x<booklist.length-this.state.numBksPerShelf; x++){

    console.log("Index x is : "+x);
        shelf[x % this.state.numBksPerShelf] = booklist[x];
        if(x % this.state.numBksPerShelf==0){
       
          let array =this.createShelf(shelf);
          console.log("Array is "+array.toString()+" and the length of shelf is "+shelf.length+" and x is "+x);
          buffer.push(array);

          shelf = new Array(this.state.numBksPerShelf);
        }

    }
    console.log("Ending index x is : "+x);
    //set up remaining shelf

    var last =  function(array, n) {
      if (array == null) 
        return void 0;
      if (n == null) 
         return array[array.length - 1];
      return array.slice(Math.max(array.length - n, 0));  
      }(booklist,this.state.numBksPerShelf);
    buffer.push(this.createShelf(last,4580584));  
    console.log("Buffer is "+buffer+", and booklist len is "+booklist.length);
    return <div>hihihi{buffer}</div>
  }