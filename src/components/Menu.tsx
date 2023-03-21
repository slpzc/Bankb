import React from 'react';
import styled from "styled-components";

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
  touch-action: pan-y;

  .panel {
    position: fixed;
    z-index: 33;
    background-color: #121212;
    border-radius: 30px 30px 0 0;
    width: 100%;
    height: 263px;
    left: 0;
    bottom: -263px;
    transition: bottom .2s ease, transform .2s ease;
    padding-top: 39px;
    padding-left: 33px;

    b {
      font-weight: 600;
      font-size: 20px;
      line-height: 110%;
      color: #FFFFFF;

      &:not(&:first-child) {
        margin-top: 20px;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      list-style: none;

      li {
        padding-top: 12px;
        padding-bottom: 12px;

        a {
          font-weight: 400;
          font-size: 14px;
          line-height: 150%;
          letter-spacing: 0.02em;
          color: #DADADA;

          text-decoration: none;
        }
      }
    }

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

import {menuStore} from '@store/index';
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";

const Menu = observer(() => {

    const handleClick = () => {
        menuStore.setOpened();
    };

    return (
        <Container className={` ${menuStore.opened ? 'active' : ''} `}>
            <div onClick={handleClick} className="clickable"></div>
            <div className="panel">
                <b>Дополнительно</b>
                <ul>
                    <li><NavLink to='https://vk.com/chekunowggg'>Связаться с разработчиком</NavLink></li>
                    <li><NavLink to=''>Сообщить об ошибке</NavLink></li>
                    <li><NavLink to=''>Версия 7.14.9 (6117)</NavLink></li>
                </ul>
            </div>
        </Container>
    );
})

export default Menu;