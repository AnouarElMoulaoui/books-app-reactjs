import React, { useContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { context } from '../../contexts/BooksContext';

const Detail = () =>{
    const {id} = useParams();
    const {booksList,setBooksList} =  useContext(context);
    const [book,setBook] = useState([]);
    useEffect(()=>{
        const data = booksList.filter(el => el.id == id)
        setBook(data);
    },[]);

    const {title,image_url,description,authors} = book[0] ?? []// book[0] : [];
  return (
        book && book.length > 0 ? <div className='flex justify-center py-8'>

            <div className='w-1/2 md:w-1/3'>
                <img width="" src={image_url} alt="" />
            </div>
            <div className='w-1/2'>
                <h2 className='text-sm font-bold uppercase py-2'>{title}</h2>
                <p className='text-sm text-justify'>
                    {description}
                </p>

                <span className='p-2'>Authors : {authors}</span>
                <div>
                <button className='text-white bg-black px-8 py-2 rounded-full ml-3 mt-1'>Add Favorite</button>
                </div>
            </div>

        </div> : <div>Aucan</div>

  )
}

export default Detail;
