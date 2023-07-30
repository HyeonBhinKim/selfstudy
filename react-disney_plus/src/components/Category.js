import React from 'react'
import styled from 'styled-components'

const Category = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt='disney' />
        <video autoPlay loop muted>
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt='marvel' />
        <video autoPlay loop muted>
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt='pixar' />
        <video autoPlay loop muted>
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt='star-wars' />
        <video autoPlay loop muted>
          <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt='national-geographic' />
        <video autoPlay loop muted>
          <source src="/videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  )
}

export default Category

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  gap: 25px;  // 사이를 25px로 둔다.
  grid-template-columns: repeat(5, 1fr); // 5개의 프래션을 로우로 나누어서 줄어들면 1개만 보이게한다.

  @media (max-width: 768px) {
    grid-template-columns : repeat(1, 1fr); //  768px보다 작으면 1개만 보이게한다.
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  order-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
              rgb(0 0 0 /73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; // 호버하게 되면 쏴아아악하고 바뀌게끔 마지막 시간초는 딜레이부분이다.

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;  // 투명도 1이면 보이고 0이면 안보임
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
  }
  
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0; // 호버할때만 보여주게 0으로 설정 그러고 나서 호버해서 어떻게 할건지 적어두자
    z-index: 0;
  }

  &:hover { // &이게 앞의 부분 임
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
                rgb(0 0 0 /72%) 0px 30px 22px -10px;
    transform: scale(1.05);  // 키워주는거 호버했을 때!!!!
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
  `;