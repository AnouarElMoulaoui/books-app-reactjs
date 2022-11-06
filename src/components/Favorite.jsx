import React from 'react'
import { useContext } from 'react';
import { contextFavorite } from '../contexts/FavoriteContext';
import { CutString } from '../utilis/Helper';

const  Favorite = () =>{
  const {favorites,setFavorites} = useContext(contextFavorite);
  
  const handleDelete = (id) =>{
      if(favorites && favorites.length > 0)
      {
        const newData  = favorites.filter(favorite => favorite.id != id);
        setFavorites(newData);
      }
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
      {
        favorites && favorites.length > 0 ?  favorites.map((item,idx) =>  <div className='h-96 w-full'>
        <div className=' w-1/2 sm:w-full  mx-auto p-3 h-full'>
           <h3 className='text-sm uppercase text-center px-1'>{CutString(item.title,29)}</h3>
           <div>
             <img  className='w-full h-72' src={item.image_url} alt={item.title} />
           </div>
             <span className='capitalize text-left'>Author : {item.authors}</span>
             <div className='p-2 text-center'>
                 <button className='bg-black text-white uppercase  px-7 py-2 rounded-full ' onClick={() => handleDelete(item.id)}>Delete</button>
             </div>
        </div>
     </div>) : <div>Aucan</div>
      } 
     
    </div>
  )
}

export default Favorite;
