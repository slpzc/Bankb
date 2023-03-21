import React from 'react';
import styled from 'styled-components'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9px 13px 13px 21px;
  background-color: #1C1C1E;
  border-radius: 10px;
  max-width: 226px;
  p:first-child{
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0.02em;
    color: #999999;
  }
  b{
    margin-top: 2px;
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0.02em;
    color: #FFFFFF;
  }
  svg{
    margin-top: 6px;
  }
  p:last-child{
    margin-top: 6px;
    font-weight: 400;
    font-size: 10px;
    line-height: 150%;
    letter-spacing: 0.02em;
    color: #999999;
  }
`;
const SpendInTuesday = () => {
    return (
        <Container>
            <p>Расходы за сегодня</p>
            <b>0 ₽</b>
            <svg width="192" height="5" viewBox="0 0 192 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="192" height="5" rx="2.5" fill="#28282B"/>
            </svg>
            <p>Вчера расходов не было</p>
        </Container>
    );
};

export default SpendInTuesday;