import axios from '../api/axios' // 우리가 만든 axios에서 불러오기 위해서
import React, { useCallback, useEffect, useState } from 'react'
import "./Row.css";
import MovieModal from './MovieModal';


const Row = ({title, id, fetchUrl}) => {
  const [movies, setMovies] = useState([])  // 영화는 여러개니까 배열로 받기위해서 State안에 [] 배열로 적어줌
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({})

  // async 비동기로 useEffect에서 사용하기위해 !먼저! 만들어 준다.
  const fetchMovieData = useCallback(async () => {  // useCallback을 바뀌는 걸 괄호닫은 [] 대괄호 배열에 바뀌는 변수를 넣어준다.
    const response = await axios.get(fetchUrl);  // 그런데 Axios 단축으로 불러오면 axios폴더에서 axios를 가져오니까 위에서 고쳐줘야함
    // console.log("response", response);
    setMovies(response.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();  // fetch
  }, [fetchMovieData]) // useCallback과 마찬가지로 fetchMovieData가 변하는걸 넣어준다.
  // 컴포넌트가 실행되면 함수도 새로 생성된다. 하지만 함수를 굳이 재생성 할 필요는 없기 때문에 useCallback을 사용한다.

  const handleClick = (movie) => { // movie state 넘겨줘야하니까 넣어주고
    setModalOpen(true);
    setMovieSelected(movie);
  }

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth + 80;  // scrollLeft는 왼쪽의 픽세을 가져온다
            }}
          >
            {"<"}
          </span>
        </div>
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className='row__poster'
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.name}
              onClick={() => handleClick(movie)} // 클릭했을 때 handleClick이라는 함수를 불러오겠다.
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span 
            className="arrow"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth + 80;  // scrollLeft는 왼쪽의 픽세을 가져온다
            }}
          >
            {">"}
          </span>
        </div>
      </div>
      {
        modalOpen && 
        <MovieModal // MovieModal 컴포넌트 가져오고
          {...movieSelected} // 전개 연산자 ...
          setModalOpen={setModalOpen} // props로 setModalOpen을 내려준다. 
          // 그러고 나면 MovieModal의 index.js에 가서 함수에다가 setModalOpen(바꿔줄값) 적어줌 / 바꿔줄 값은 false이다.
        />
      }
    </div>
  )
}

export default Row
