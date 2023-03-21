import React, {memo} from 'react';
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 30px;

  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    transition: background-color .2s ease;
    padding: 10px;
    border-radius: 13px;
    &:hover{
      background-color: #1C1C1E;
    }

    img {
      border-radius: 30px;
      object-fit: cover;
    }

    .main-information {
      display: flex;
      align-items: center;
      gap: 18px;
    }

    .information {
      .title {
        font-weight: 600;
        font-size: 15px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #FFFFFF;
      }

      p {
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #999999;
      }
    }

    .price-information {
      b {
        font-weight: 600;
        font-size: 12px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #FFFFFF;
      }

      p {
        font-weight: 400;
        font-size: 10px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #999999;
      }
    }
  }

  .slice {
    margin-top: 16px;
    margin-bottom: 22px;
    width: 100%;
    height: 2px;
    background-color: #1E1D1B;
    border-radius: 20px;
  }

  .cards {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
`;
import {menuStore} from "@store/index";
import {IHistory} from "../interfaces/historyInterface";

const history = [
    {
        sellerName: 'Магнит',
        sellerType: 'Супермаркеты',
        sellerLogo: 'https://i.imgur.com/U8jRBWZ.png',
        buyCardType: 'Чекунов Платинум',
        check: [
            {
                type: 'food',
                name: 'Хлеб',
                description: 'Булочные изделия',
                price: 64.99
            }
        ]
    },
    {
        sellerName: 'Пятёрочка',
        sellerType: 'Супермаркеты',
        sellerLogo: 'https://i.imgur.com/B16wtvg.png',
        check: [
            {
                type: 'food',
                name: 'Молоко',
                description: 'Молочные продукты',
                price: 42.99
            }
        ],
        buyCardType: 'Чекунов Платинум'
    }
]
const HistoryFall = memo(() => {

    const handleClick = (sellerInfo: IHistory) => {
        menuStore.setHistory(sellerInfo);
    };

    return (
        <Container>
            <div className="installment card">
                <div className="main-information">
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="42" height="42" rx="21" fill="#FFDD2D"/>
                        <path
                            d="M30 19.991V29.75H12V19.991H17.6704V24.8707H24.3296V19.991H30ZM24.3296 12.25H17.6704V17.1293H24.3296V12.25Z"
                            fill="#1E1D1B"/>
                    </svg>
                    <div className="information">
                        <b className="title">Доступна рассрочка</b>
                        <p>Для 1 покупки на сумму 11 199 ₽ </p>
                    </div>
                </div>
            </div>
            <div className="slice"></div>
            <div className="cards">
                {
                    history.map(({sellerName, sellerType, sellerLogo, buyCardType, check}, key) => (
                        <div onClick={() => handleClick({sellerName, sellerType, sellerLogo, check})} key={key}
                             className="card">
                            <div className="main-information">
                                <img src={sellerLogo} width='42px' height="42px"/>
                                <div className="information">
                                    <b className="title">{sellerName}</b>
                                    <p>{sellerType}</p>
                                </div>
                            </div>
                            <div className="price-information">
                                <b>- {check.reduce((acc, item) => {
                                    return acc + item.price;
                                }, 0)} ₽</b>
                                <p>{buyCardType}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Container>
    );
});

export default HistoryFall;