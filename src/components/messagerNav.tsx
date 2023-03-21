import React from 'react';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
interface Props {
    avatar?: string,
    description?: string,
    name?: string
}

const Container = styled.nav`
  display: flex;
  align-items: center;
  position: -ms-device-fixed;
  top: 0;
  left: 0;
  padding: 14px 16px;
  z-index: 2;
  background: #0E0E0E;
  height: 80px;
  width: 100%;

  button {
    background-color: transparent;
    outline: none;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navigation-user {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-left: 39px;

    &_info {
      b {
        font-weight: 600;
        font-size: 13px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #FFFFFF;
      }

      p {
        font-weight: 500;
        font-size: 10px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #3D3D3D;
      }
    }

    img {
      object-fit: cover;
      border-radius: 30px;
    }
  }
`;
const MessagerNav = ({avatar, description, name}: Props) => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    return (
        <Container>
            <button onClick={ handleClick }>
                <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.875 1L2 9.5M2 9.5L9.875 18M2 9.5L23 9.49999" stroke="#FFDD2D" stroke-width="1.6"/>
                </svg>

            </button>
            <div className="navigation-user">
                <img width='35px' height="35px" src={avatar}/>
                <div className="navigation-user_info">
                    <b> {name} </b>
                    <p> {description} </p>
                </div>
            </div>
        </Container>
    );
};

export default MessagerNav;