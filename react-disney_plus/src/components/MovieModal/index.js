import React from 'react';
import "./MovieModal.css";


// 배너 컴포넌트에서 모달 사용함
const MovieModal = ({ // prop 받은 movie안의 정보를 전개연산자(...)로 내려줬으니까 백드랍패스, 타이틀, 오버뷰 등 여러 정보를 적어준다.
    backdrop_path,
    title,
    overview,
    name,
    release_date,
    first_air_date,
    vote_average,
    setModalOpen
}) => {
    // setModalOpen(false)
  return (
    <div className='presentation' role="presentation">
      <div className='wrapper-modal'>
        <div className='modal'>
          <span
            onClick={() => setModalOpen(false)}
            className="modal-close"
          >
            X
          </span>

          <img
            className='modal__poster-img'
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="modal-img"
          />

          <div className='modal__content'>
            <p className='modal__details'>
              <span className='modal__user_perc'>100% for you</span>{" "}
              {release_date ? release_date : first_air_date}
              {/* 하드코딩한 부분이다. */}
            </p>

            <h2 className='modal__title'> {title ? title : name}</h2>
            <p className='modal__overview'>평점: {vote_average}</p>
            <p className='modal__overview'>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal