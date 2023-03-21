import React from 'react';
import {useParams} from "react-router-dom";

const Input = styled.div`
  max-width: 282px;
  width: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 22px;
    top: 0;
    bottom: 0;
    width: 12px;
    height: 12px;
    margin: auto;
    background: url("https://i.imgur.com/F0R8RdQ.png") no-repeat;

  }

  input {
    max-width: 100%;
    width: 100%;
    height: 48px;
    background-color: #262626;
    border-radius: 15px;
    outline: none;
    border: 0;
    padding: 8px 23px 8px 56px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: white;
    line-height: 150%;

    &::placeholder {
      font-weight: 500;
      font-size: 12px;
      letter-spacing: 0.02em;
      color: #9B9B9B;
      line-height: 150%;
    }
  }
`
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  max-width: 327px;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  padding-top: 27px;
  padding-bottom: 17px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(180deg, #121212 76%, rgba(18, 18, 18, 0) 100%);;

`

import {menuStore} from '../store/index'

const Search = () => {
    const {id} = useParams();

    return (
        <>
            {!id && <Container className={`top-search`}>
                <Input className="top-search_input">
                    <input type="text" placeholder="Курсы валют"/>
                </Input>
                <div onClick={() => {
                    menuStore.setOpened();
                }} className="top-search_menu">
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 1.33333C0 0.595833 0.595833 0 1.33333 0H17.3333C18.0708 0 18.6667 0.595833 18.6667 1.33333C18.6667 2.07083 18.0708 2.66667 17.3333 2.66667H1.33333C0.595833 2.66667 0 2.07083 0 1.33333ZM0 8C0 7.2625 0.595833 6.66667 1.33333 6.66667H17.3333C18.0708 6.66667 18.6667 7.2625 18.6667 8C18.6667 8.7375 18.0708 9.33333 17.3333 9.33333H1.33333C0.595833 9.33333 0 8.7375 0 8ZM18.6667 14.6667C18.6667 15.4042 18.0708 16 17.3333 16H1.33333C0.595833 16 0 15.4042 0 14.6667C0 13.9292 0.595833 13.3333 1.33333 13.3333H17.3333C18.0708 13.3333 18.6667 13.9292 18.6667 14.6667Z"
                            fill="white"/>
                    </svg>
                </div>
            </Container>}
        </>
    )
}


export default Search;