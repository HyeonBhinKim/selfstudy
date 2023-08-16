import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../api/axios';

const DetailPage = () => {
  let { movieId } = useParams(); // App.js에서 route 해준게 movieId
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `/movie/${movieId}`
      )
      // console.log('response',response);
      setMovie(response.data);
    }
    fetchData();
  }, [movieId]) // movieId가 바뀌면 다시 콜한다.
  
  if(!movie) return null; // movie가 없으면 null 반환


  return (
    <section>
      <img 
        className='modal__poster-img'
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="img"
      />
    </section>
  )
}

export default DetailPage