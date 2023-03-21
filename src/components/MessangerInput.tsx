import React, {useState} from 'react';
import styled from 'styled-components'
import {userData} from "@store/index";
import {observer} from "mobx-react-lite";

const Container = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 63px;
  background-color: #0E0E0E;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 31px;
  gap: 12px;

  .input {
    position: relative;
    max-width: 217px;
    width: 100%;

    input {
      background-color: #262626;
      border-radius: 30px;
      border: 0;
      font-weight: 500;
      font-size: 11px;
      line-height: 150%;
      letter-spacing: 0.02em;
      color: white;


      max-width: 217px;
      width: 100%;
      height: 35px;
      padding-left: 17px;
      padding-right: 40px;

      &:focus {
        outline: 1px solid #d0b324;
      }

      &::placeholder {
        color: #3D3D3D;
      }
    }

    svg {
      position: absolute;
      right: 22px;
      top: 0;
      bottom: 0;
      margin: auto;
      z-index: 1;

      * {
        transition: all .2s ease;
      }
    }
  }
`;

interface Props {
    id: any
}

const MessangerInput = observer(({id}: Props) => {

    const [message, setMessage] = useState('')

    const handleClick = () => {

        if (message.length < 4) return false;

        const months = [
            'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ];

        const currentDate = new Date();
        const day = currentDate.getDate();
        const monthIndex = currentDate.getMonth();
        const year = currentDate.getFullYear();

        const formattedDate = `${day} ${months[monthIndex]} ${year}`;

        const payload = {
            from: 'Алексей',
            message,
            date: formattedDate
        }
        userData.pushMessage(id, payload)
        return setMessage('')
    }

    return (
        <Container>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="28" height="28" rx="14" fill="#FFDD2D"/>
                <g clipPath="url(#clip0_34_249)">
                    <path
                        d="M11.25 7.4375C10.743 7.4375 10.3333 7.85645 10.3333 8.375V14H9.41667C8.90964 14 8.5 14.4189 8.5 14.9375C8.5 15.4561 8.90964 15.875 9.41667 15.875H10.3333V16.8125H9.41667C8.90964 16.8125 8.5 17.2314 8.5 17.75C8.5 18.2686 8.90964 18.6875 9.41667 18.6875H10.3333V19.625C10.3333 20.1436 10.743 20.5625 11.25 20.5625C11.757 20.5625 12.1667 20.1436 12.1667 19.625V18.6875H16.75C17.257 18.6875 17.6667 18.2686 17.6667 17.75C17.6667 17.2314 17.257 16.8125 16.75 16.8125H12.1667V15.875H15.375C17.6523 15.875 19.5 13.9854 19.5 11.6562C19.5 9.32715 17.6523 7.4375 15.375 7.4375H11.25ZM15.375 14H12.1667V9.3125H15.375C16.6411 9.3125 17.6667 10.3613 17.6667 11.6562C17.6667 12.9512 16.6411 14 15.375 14Z"
                        fill="#1E1D1B"/>
                </g>
                <defs>
                    <clipPath id="clip0_34_249">
                        <rect width="11" height="15" fill="white" transform="translate(8.5 6.5)"/>
                    </clipPath>
                </defs>
            </svg>
            <div className="input">
                <input value={message} onChange={(e) => setMessage(e.target.value)} type="text"
                       placeholder='Деньги или сообщение...'/>
            </div>
            <svg onClick={handleClick} width="13" height="13" viewBox="0 0 13 13" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_34_254)">
                    <path
                        d="M12.6468 0.14204C12.9032 0.319775 13.0378 0.627001 12.9896 0.934228L11.3646 11.4967C11.3265 11.743 11.1767 11.9588 10.9583 12.0807C10.7399 12.2026 10.4784 12.2178 10.2474 12.1213L7.21065 10.8594L5.4714 12.7409C5.24542 12.9872 4.88995 13.0684 4.57765 12.9465C4.26534 12.8247 4.06222 12.5225 4.06222 12.1874V10.0647C4.06222 9.96313 4.1003 9.86665 4.16886 9.79302L8.42432 5.14907C8.57159 4.98911 8.56651 4.74282 8.41417 4.59048C8.26182 4.43813 8.01554 4.42798 7.85557 4.5727L2.69112 9.16079L0.449129 8.03852C0.179989 7.90395 0.00733233 7.63481 -0.000284859 7.3352C-0.00790205 7.03559 0.14952 6.7563 0.408504 6.60649L11.7835 0.106494C12.0552 -0.0483892 12.3903 -0.0331549 12.6468 0.14204Z"
                        fill={message.length > 4 ? "#FFDD2D" : '#999'}/>
                </g>
                <defs>
                    <clipPath id="clip0_34_254">
                        <rect width="13" height="13" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </Container>
    );
});

export default MessangerInput;