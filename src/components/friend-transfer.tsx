import React, {useState} from 'react';
import styled from "styled-components";
import PhoneInput from 'react-phone-number-input/input';
import {userData} from "@store/index";
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";

const Container = styled.div`
  margin-top: 26px;

  .input {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 42px;

    svg.phone {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      left: 20px;
    }

    input {
      letter-spacing: 0.02em;
      color: white;
      width: 100%;
      border: 0;
      outline: 1px solid transparent;
      height: 42px;
      font-weight: 500;
      font-size: 12px;
      line-height: 150%;
      background-color: #262626;
      border-radius: 8px;
      padding-left: 53px;

      &:focus {
        outline: 1px solid #FFDD2D;
      }

      &::placeholder {
        letter-spacing: 0.02em;
        color: #3D3D3D;
      }
    }

    button {
      display: flex;
      align-items: center;
      border: 0;
      padding: 15.75px 21.25px 17.75px;
      position: absolute;
      right: 0;
      background-color: #FFDD2D;
      border-radius: 8px;
      height: 100%;
    }
  }

  .fast-users {
    margin-top: 33px;
    display: flex;
    gap: 24px;
    overflow-x: auto;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    &_user {
      text-decoration: none;
      height: 70px;
      width: 57px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        object-position: center;
        border-radius: 30px;
      }

      b {
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #FFFFFF;
      }
    }
  }
`
const fastUsers = userData.user.abonents


const FriendTransfer = observer(() => {

    const [phoneNumber, setPhoneNumber] = useState("+7");
    const handleEvent = (event: any) => {
        if(event && event.length === 12){
            return;
        }
        setPhoneNumber(event)
    }

    return (
        <Container className="friend-transfer">
            <div className="input">
                <svg className="phone" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_34_72)">
                        <path
                            d="M4.18691 0.624521C3.99141 0.152255 3.47598 -0.0991118 2.9834 0.0354585L0.749023 0.644833C0.307227 0.766708 0 1.16788 0 1.62491C0 7.90655 5.09336 12.9999 11.375 12.9999C11.832 12.9999 12.2332 12.6927 12.3551 12.2509L12.9645 10.0165C13.099 9.52393 12.8477 9.0085 12.3754 8.813L9.93789 7.79737C9.52402 7.62472 9.04414 7.74405 8.76231 8.0919L7.73652 9.34366C5.94902 8.49815 4.50176 7.05089 3.65625 5.26339L4.90801 4.24015C5.25586 3.95577 5.3752 3.47843 5.20254 3.06456L4.18691 0.62706V0.624521Z"
                            fill="#FFDD2D"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_34_72">
                            <rect width="13" height="13" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <PhoneInput
                    international
                    countryCallingCodeEditable={false}
                    maxlength={16}
                    limitMaxLength={true}
                    placeholder="Введите номер или имя"
                    defaultValue="+7"
                    value={phoneNumber}
                    onChange={ (event)=> handleEvent(event) }/>
                <button>
                    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 0.750002L14.75 6M14.75 6L9.5 11.25M14.75 6L0.75 6" stroke="black" strokeWidth="2"/>
                    </svg>
                </button>
            </div>
            <div className="fast-users">
                {
                    fastUsers.map(({ name, numberPhone, img }, key) => (
                        <NavLink to={ `/application/transferDialog/${numberPhone}` }  key={key} className="fast-users_user">
                            <img width="50px" height="50px"  src={ img } alt="Аватар пользователя"/>
                            <b> { name } </b>
                        </NavLink>
                    ))
                }
            </div>
        </Container>
    );
});

export default FriendTransfer;