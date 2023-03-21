import React from 'react';
import styled from "styled-components";
import {observer} from "mobx-react-lite";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition: all .2s ease;
  opacity: 0;
  user-select: none;
  pointer-events: none;
  z-index: 9999;

  .panel {
    position: fixed;
    z-index: 33;
    background-color: #121212;
    border-radius: 30px 30px 0px 0px;
    width: 100%;
    height: 263px;
    left: 0;
    bottom: -263px;
    transition: bottom .2s ease;
    padding-top: 39px;
    padding-left: 33px;
    padding-right: 33px;
    display: flex;
    align-items: center;
    flex-direction: column;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: -18px;
      margin: 0 auto;
      width: 59px;
      height: 3px;
      background: #3D3D3D;
      border-radius: 100px;
    }

    img {
      border-radius: 30px;
      object-fit: cover;
    }

    .panel-information {
      display: flex;
      gap: 18px;

      &_text {
        display: flex;
        flex-direction: column;

        b {
          font-weight: 600;
          font-size: 20px;
          line-height: 150%;
          color: #FFFFFF;
        }

        p {
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          letter-spacing: 0.02em;
          color: #3D3D3D;
        }
      }
    }

    .check {
      margin-top: 25px;
      display: flex;
      flex-direction: column;
      gap: 9px;
      max-width: 243px;
      width: 100%;

      &-title {
        font-weight: 600;
        font-size: 12px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #FFFFFF;
      }

      &-card {
        background-color: #1C1C1E;
        border-radius: 10px;
        padding: 16px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 243px;
        width: 100%;

        &_information {
          display: flex;
          align-items: center;
          gap: 13px;

          &-text {
            b {
              font-weight: 600;
              font-size: 15px;
              line-height: 150%;
              letter-spacing: 0.02em;
              color: #FFFFFF;
            }

            p {
              font-weight: 400;
              font-size: 10px;
              line-height: 150%;
              letter-spacing: 0.02em;
              color: #3D3D3D;
            }
          }
        }

        .check-price {
          font-weight: 600;
          font-size: 12px;
          line-height: 150%;
          letter-spacing: 0.02em;
          color: #FFFFFF;
        }
      }
    }
  }

  .clickable {
    width: 100vw;
    height: 100vh;
    background: transparent;
    z-index: 32;
  }

  &.active {
    bottom: 0;
    opacity: 1;
    user-select: auto;
    pointer-events: auto;

    .panel {
      bottom: 0;
    }
  }
`

import {menuStore} from "@store/index";
import {ICheck} from "../interfaces/historyInterface";

const HistoryPopup = observer(() => {

    const handleClick = () => {
        menuStore.setHistory(false)
    }

    let check: Array<ICheck> = menuStore.history?.check || []
    const CheckElement = () => (
        <>
            {check.map(({name, description, price}, key) => (
                <div key={key} className="check-card">
                    <div className="check-card_information">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="30" height="30" rx="15" fill="#FFDD2D"/>
                            <g clipPath="url(#clip0_34_357)">
                                <path
                                    d="M20.1429 8C19.7143 8 16.7143 8.875 16.7143 12.8125V15.875C16.7143 16.8402 17.483 17.625 18.4286 17.625H19.2857V21.125C19.2857 21.609 19.6688 22 20.1429 22C20.617 22 21 21.609 21 21.125V17.625V14.5625V8.875C21 8.39102 20.617 8 20.1429 8ZM10.7143 8.4375C10.7143 8.21328 10.5509 8.02734 10.3313 8.00273C10.1116 7.97813 9.91607 8.12578 9.86786 8.3418L9.05625 12.0688C9.01875 12.241 9 12.416 9 12.591C9 13.8461 9.94018 14.877 11.1429 14.9891V21.125C11.1429 21.609 11.5259 22 12 22C12.4741 22 12.8571 21.609 12.8571 21.125V14.9891C14.0598 14.877 15 13.8461 15 12.591C15 12.416 14.9812 12.241 14.9437 12.0688L14.1321 8.3418C14.0839 8.12305 13.883 7.97813 13.6661 8.00273C13.4491 8.02734 13.2857 8.21328 13.2857 8.4375V12.107C13.2857 12.2547 13.1679 12.375 13.0232 12.375C12.8866 12.375 12.7741 12.2684 12.7607 12.1289L12.4259 8.39922C12.4071 8.17227 12.2223 8 12 8C11.7777 8 11.5929 8.17227 11.5741 8.39922L11.242 12.1289C11.2286 12.2684 11.1161 12.375 10.9795 12.375C10.8348 12.375 10.717 12.2547 10.717 12.107V8.4375H10.7143ZM12.008 12.5938H12H11.992L12 12.5746L12.008 12.5938Z"
                                    fill="#1E1D1B"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_34_357">
                                    <rect width="12" height="14" fill="white" transform="translate(9 8)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="check-card_information-text">
                            <b> {name} </b>
                            <p> {description} </p>
                        </div>
                    </div>
                    <b className="check-price"> {price} ₽ </b>
                </div>
            ))}
        </>
    )

    return (
        <Container className={` ${menuStore.history.show ? 'active' : ''} `}>
            <div className="clickable" onClick={handleClick}></div>
            <div className="panel">
                <div className="panel-information">
                    <img width='51px' height="51px" src={menuStore.history.sellerLogo} alt=""/>
                    <div className="panel-information_text">
                        <b> {menuStore.history.sellerName} </b>
                        <p> {menuStore.history.sellerType} </p>
                    </div>
                </div>
                <div className="check">
                    <p className='check-title'>Чек ваших покупок</p>
                    {
                        check && <CheckElement/>
                    }
                </div>
            </div>
        </Container>
    );
})

export default HistoryPopup;