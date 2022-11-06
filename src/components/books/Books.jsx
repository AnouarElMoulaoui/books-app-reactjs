import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { context, ContextProvider } from '../../contexts/BooksContext';
import Book from './Book';

const Books = () =>{
    const {booksList,setBooksList} =  useContext(context);


    useEffect(()=>{
    const fetchBooks = async => {
        axios.get("https://example-data.draftbit.com/books?_limit=10")
        .then(res => setBooksList(res.data))
        .catch(error => console.log(error));
    }
    fetchBooks();
    },[]);

  return (

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
      {
        booksList &&  booksList.map((item,idx) => <Book key={idx} data={item}/>)
      } 
     
    </div>
  )
}

export default Books;