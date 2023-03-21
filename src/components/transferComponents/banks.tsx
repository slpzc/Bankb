import React, {useState} from 'react';
import styled from "styled-components";
const Container = styled.div`
  margin-top: 21px;
  display: flex;
  gap: 15px;

  .card {
    background-color: #232323;
    border-radius: 18px;
    padding: 18px 11px 18px 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 107px;
    overflow: hidden;
    position: relative;
    transition: border .2s ease;
    border: 2px solid transparent;
    img{
      max-height: 28px;
    }
    &.active{
      border: 2px solid #d0b324;
    }
    &::before {
      position: absolute;
      content: "";
      right: 0;
      height: 100%;
      width: 100%;
      top: 0;
      background: linear-gradient(270deg, #232323 5.71%, rgba(255, 255, 255, 0) 73.44%);
    }

    b {
      font-weight: 500;
      font-size: 12px;
      line-height: 110%;
      letter-spacing: 0.03em;
      color: #FFFFFF;
      margin-top: 13px;
      white-space: nowrap;
    }

    p {
      margin-top: 4px;
      font-weight: 400;
      font-size: 12px;
      line-height: 110%;
      letter-spacing: 0.03em;
      color: rgba(255, 255, 255, 0.7);
    }
  }
  .card:last-child {
    b {
      white-space: normal;
    }
  }
`

interface IBank {
    title: string,
    to: string,
    bankAvatar: string
}

const Banks = () => {

    const choice: Array<IBank> = [
        {
            title: 'Чекунов Инвест',
            to: 'Сергей С.',
            bankAvatar: 'https://i.imgur.com/Mog6Mq0.png'
        },
        {
            title: 'Другой банк',
            to: '',
            bankAvatar: 'https://i.imgur.com/srXuvXg.png'
        }
    ]
    const [bank, setBank]:any = useState()
    const handleClick = (bank:object) => {
        setBank(bank)
    }
    return (
        <Container>
            {
                choice.map(({title, to, bankAvatar}, key) => (
                    <div onClick={ ()=> handleClick({title, to, bankAvatar}) } key={key} className={`card ${ bank?.title === title ? 'active' : '' }`}>
                        <img src={ bankAvatar } alt=""/>
                        <b>{title}</b>
                        <p>{ to }</p>
                    </div>
                ))
            }
        </Container>
    );
};

export default Banks;