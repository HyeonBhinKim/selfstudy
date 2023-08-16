import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './SearchPage.css';
import { useDebounce } from '../../hooks/useDebounce';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([])

  const useQuery = () => {
    return new URLSearchParams(useLocation().search); // 유즈 쿼리 함수 불러오면 이거 실행시키고
  }

  let query = useQuery();  // uselocation.search()로 불러온게 쿼리에 저장되니까

  const navigate = useNavigate();
  const searchTerm = query.get('q'); // 왜 'q'이냐 ?q= 값에다가 넣으니까 그리고 useLocation().search 메서드
  //  그리고 searchTerm이 바뀔 때 마다 검색하기 위해 비동기하기 위해서 useEffect 새로 만든다.
  //  그렇지만 바뀔 때마다 비동기로 불러오면 백에 무리가 갈 수 있으니까 debounce 사용한다.
  const debounceSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
      if(debounceSearchTerm) { // serachTerm이 있을 때만 영화 찾을거야!
        fetchSearchMovie(debounceSearchTerm) // 있으니까 함수 호출해서 searchTerm 넣어줘
      }
  }, [debounceSearchTerm]) // 

  const fetchSearchMovie = async (searchTerm) => { // 영화 찾는거 할 함수 인데 비동기로 처리할거니까 async await
    try {
      const response = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
      setSearchResults(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  if(searchResults.length > 0) {
    return (
      <section className='search-container'>
          {searchResults.map((movie) => {
            if(movie.backdrop_path !== null && movie.media_type !== "person") {
              const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path; // p/w500 p/사이즈
              return (
                <div className='movie' key={movie.id}>
                  <div className='movie__column-poster' onClick={() => navigate(`/${movie.id}`)} >
                    <img src={movieImageUrl} alt="movie" className='movie__poster' />
                  </div>
                </div>
              )
            } 
          })}
      </section>
    )
  } else {
    return (
      <section className='no-results'>
          <div className='no-results__text'>
            <p>
              찾고자하는 검색어 "{searchTerm}" 에 맞는 영화가 없습니다.
            </p>
          </div>
        </section>
      )
  }
}

export default SearchPage