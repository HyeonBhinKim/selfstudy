import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'; // uselocation.search() 메소드 쓴다.
import { styled } from 'styled-components'

const Nav = () => {  // Md에 캡쳐해둠
  const [show, setShow] = useState("false");
  const { pathname } = useLocation();  // path 위치 알려준다.
  const [searchValue, setSearchValue] = useState("")
  const navigate = useNavigate();


  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
    window.removeEventListener('scroll', handleScroll) // remove event listener for scroll 안지우면 계속해서 쌓임
    }
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  const handleChange = (e) => { // 밑에 바뀌는거 함수 호출하기 위해
    setSearchValue(e.target.value); // set search value 이니까 serachvalue 값을 저장해준다.
    navigate(`/search?q=${e.target.value}`); // navigate로 서치페이지에서 변수인 e.target.value 넣어버린다.
  }
  
  return (
    <NavWrapper show={show}>
        <Logo>
            <img
              src="/images/logo.svg"
              alt="Disney Plus Logo"
              onClick={()=>(window.location.href = "/")} />
        </Logo>

        {pathname === '/' ?
          (<Login>Login</Login>) :
            <Input 
                value={searchValue} // 검색어 상태를 저장하기위해 useState 있어야하니까 위에다 적어줌
                onChange={handleChange} // onChange로 바뀔 때 마다 handleChange불러서 setSearchValue, navigate 쓴다.
                className='nav__input' 
                type='text'
                placeholder='검색해주세요.' 
            />
          }
    </NavWrapper>
  )
}

export default Nav

const Login = styled.a`
    background-color: rgba(0,0,0,0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    transition: all 0.2s ease 0s;

    &:hover {
    background-color: #f9f9f9;
    color: gray;
    border-color: transparent;
    }
`

const Input = styled.input`
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: rgba(0,0,0, 0.582);
    border-radius: 5px;
    color: white; 
    padding: 5px;
    border: none;
`

const NavWrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: ${props => props.show ? "#090b13": "transparent"};  // props를 if문으로 해둔거임 "transparent"투명한!!
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 16px;
    z-index: 3;
`;

const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img {
        width: 100%;
        display: block;
    }
`