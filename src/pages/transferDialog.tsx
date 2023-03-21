import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import styled from "styled-components";
import PhoneInput from 'react-phone-number-input/input';
import {NumericFormat } from 'react-number-format';


import {userData} from "@store/index";
import {observer} from "mobx-react-lite";
import {ICard} from "../interfaces/userInterface";
import Banks from "@components/transferComponents/banks";


const Container = styled.div`
  margin-top: 26px;
  h1{
    font-weight: 600;
    font-size: 32px;
    line-height: 110%;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    svg{
      margin-right: 15px;
    }
  }
  .by-card{
    margin-top: 36px;
    background-color: #2A2A2A;
    border-radius: 16px;
    padding: 11px 12px;
    p{
      font-weight: 500;
      font-size: 12px;
      line-height: 110%;
      letter-spacing: 0.03em;
      color: #64696F;
    }
    b{
      margin-top: 4px;
      font-weight: 500;
      font-size: 15px;
      line-height: 110%;
      letter-spacing: 0.03em;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      gap: 8px;
      span{
        margin-left: 5px;
        font-weight: 300;
        color: rgba(255, 255, 255, 0.3);
      }
    }
  }
  .phone-input{
    width: 100%;
    position: relative;
    margin-top: 15px;
    input{
      background-color: #2A2A2A;
      border-radius: 16px;
      border: 0;
      width: 100%;
      height: 56px;

      padding: 28px 0 11px 12px;
      font-weight: 500;
      font-size: 15px;
      line-height: 110%;
      letter-spacing: 0.03em;
      color: #FFFFFF;
      &:focus{
        outline: 2px solid #d0b324;
      }
    }
    p{
      font-weight: 500;
      font-size: 12px;
      line-height: 110%;
      letter-spacing: 0.03em;
      color: #64696F;
      position: absolute;
      top: 11px;
      left: 12px;
    }
  }
  .sum-input{
    margin-top: 23px;
    display: flex;
    flex-direction: column;
    input{
      border: 0;
      background-color: #2A2A2A;
      border-radius: 16px;
      font-weight: 600;
      font-size: 20px;
      line-height: 110%;
      letter-spacing: 0.03em;
      color: #FFFFFF;
      padding: 17px 0 17px 12px;
      &:focus{
        outline: 2px solid #d0b324;
      }
    }
    p{
      margin-left: 9px;
      margin-top: 12px;
      font-weight: 400;
      font-size: 12px;
      line-height: 110%;
      letter-spacing: 0.02em;
      color: #898989;
    }
  }
  button{
    margin-top: 121px;
    width: 100%;
    background-color: #FFDD2D;
    border-radius: 17px;
    padding: 17px 0;
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
    color: #342F07;
    border: 0;
    &:disabled{
      background-color: #999999;
    }
  }
`
const TransferDialog = observer(() => {
    const navigate = useNavigate()
    const {id} = useParams();
    console.log(id)
    const usersCards: ICard[] = userData.user.memberCards

    const [number, setNumber] = useState(id)
    const [value, setValue] = useState("");

    const [lastNonEmptyValue, setLastNonEmptyValue] = useState('0 ₽');

    const handleChange = (e: any) => {
        const value = formatValue(e);
        if (value === '') {
            setValue(lastNonEmptyValue);
        } else {
            setLastNonEmptyValue(value);
            setValue(value);
        }
    };

    function formatValue(event: any) {
        const value = event.target.value;
        console.log(value.length);
        if (value === '') {
            event.preventDefault();
            return '';
        }
        if (value === '0 ₽') return '0 ₽';

        const formattedValue = value
            .replace(/\D/g, '')
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
            .concat(' ₽');
        return formattedValue;
    }
    const returnBackPage = () => {
        navigate(-1)
    }
    return (
        <Container>
                <h1>
                    <svg onClick={ returnBackPage } width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.60938 20.9961C9.86719 21.2539 10.1953 21.3945 10.582 21.3945C11.3555 21.3945 11.9766 20.7852 11.9766 20.0117C11.9766 19.625 11.8125 19.2734 11.543 19.0039L3.33984 10.9883L11.543 2.99609C11.8125 2.72656 11.9766 2.36328 11.9766 1.98828C11.9766 1.21484 11.3555 0.605469 10.582 0.605469C10.1953 0.605469 9.86719 0.746094 9.60938 1.00391L0.492188 9.91016C0.164062 10.2148 0.0117188 10.5898 0 11C0 11.4102 0.164062 11.7617 0.492188 12.0781L9.60938 20.9961Z" fill="#FFDD2D"/>
                    </svg>
                    Перевести
                </h1>
                <div className="by-card">
                    <p>Перевести с</p>
                    <b>{ usersCards[0].balance } ₽ <span> •• { usersCards[0].cardNumber.substring(usersCards[0].cardNumber.length - 4) } </span> </b>
                </div>
           <div className="phone-input">
               <p>Получатель</p>
               <PhoneInput
                   international
                   maxLength={16}
                   placeholder="Введите номер или имя"
                   defaultValue="+7"
                   value={number}
                   onChange={setNumber}/>
           </div>
            <Banks/>
            <div className="sum-input">
                <NumericFormat
                    value={value}
                    thousandSeparator=" "
                    suffix=" ₽"
                    allowLeadingZeros={true}
                    onChange={handleChange}

                />
                <p>Сумма от 0₽ до 2 000 000 ₽</p>
            </div>
            <button type='submit' >Перевести</button>
        </Container>
    );
});

export default TransferDialog;