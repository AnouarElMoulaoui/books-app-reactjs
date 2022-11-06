import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextFavorite } from '../../contexts/FavoriteContext';
import { CutString } from '../../utilis/Helper';
import "./books.css"

const Book = ({data}) =>{
  const {id,title,authors,image_url} = data;
  const {favorites,setFavorites} = useContext(contextFavorite);

  const handleAddFavorite = () =>{
      if(data){
          if(favorites && !favorites.some(favorite => favorite.id == id)){
            setFavorites([...favorites,data]);
          }
          else{
            setFavorites([data]);
          }
      }

  }
  
  return (
    
    <div className='h-96 w-full'>
       <div className=' w-1/2 sm:w-full  mx-auto p-3 h-full'>
           <Link to={`/Detail/${id}`}>
          <h3 className='text-sm uppercase text-center px-1'>{CutString(title,29)}</h3>
          <div>
            <img  className='w-full h-72' src={image_url} alt={title} />
          </div>
            <span className='capitalize text-left'>Author : {authors}</span>
            </Link>
            <div className='p-2 text-center'>
                <button className='bg-black text-white uppercase  px-7 py-2 rounded-full ' onClick={handleAddFavorite}>Add Favorite</button>
            </div>
       </div>
    </div>
  )
}

export default Book;