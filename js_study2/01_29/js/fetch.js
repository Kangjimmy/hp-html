'use strict';

const arr = [];
fetch('http://localhost:4000/books')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((value) => {
      console.log(value);
    });
  })
  .catch((error) => console.log(error));
