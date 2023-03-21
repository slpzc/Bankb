import React from 'react';
import styled from 'styled-components'
import {NavLink} from "react-router-dom";
import {userData} from "@store/index"
import {IDialog} from "../interfaces/MessegesInterface";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  margin-top: 31px;
  margin-left: auto;
  margin-right: auto;
  max-width: 307px;

  .card {
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;

    img {
      border-radius: 30px;
      height: 42px;
      object-fit: cover;
      width: 100%;
      max-width: 42px;
    }

    .message-inner {
      max-width: 100%;
      width: 100%;
      margin-left: 19px;

      &_name-date {
        display: flex;
        justify-content: space-between;

        b {
          font-weight: 600;
          font-size: 15px;
          line-height: 150%;
          letter-spacing: 0.02em;
          color: #FFFFFF;
        }

        p {
          font-weight: 600;
          font-size: 12px;
          line-height: 150%;
          letter-spacing: 0.02em;
          color: #999999;
        }
      }

      &-message {
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #999999;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          right: 0;
          height: 100%;
          width: 31px;
          background: linear-gradient(270deg, #121212 31.25%, rgba(18, 18, 18, 0) 100%);
        }

        span.price {
          font-weight: 600;
          font-size: 12px;
          line-height: 150%;
          letter-spacing: 0.02em;
          color: #1BA93D;
        }
      }
    }
  }
`;
// interface Dialog {
//     to: string,
//     avatar: string,
//     lastMessage: string,
//     date: string,
//     key?: any
// }

const Dialogs: Array<IDialog> = userData.user?.dialogs

const Dialog = () => {

    return (
        <Container>
            {Dialogs.map(({name, avatar, messages, dialog_uid}, key) =>
                <NavLink to={`${dialog_uid}`} key={key} className="card">
                    <img width='42px'
                         height='42px'
                         src={avatar} alt="Пользовательская фотография"/>
                    <div className="message-inner">
                        <div className="message-inner_name-date">
                            <b> {name} </b>
                            <p> { messages ?  messages[messages.length - 1].date : messages} </p>
                        </div>
                        <div className="message-inner-message">
                            { messages ? messages[messages.length - 1].message : messages }
                        </div>
                    </div>
                </NavLink>
            )}
        </Container>
    );
};

export default Dialog;