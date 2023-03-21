import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .total{
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
      font-weight: 500;
      font-size: 13px;
      line-height: 150%;
      letter-spacing: 0.02em;
      color: #FFFFFF;
    }
    b{
      font-weight: 500;
      font-size: 13px;
      line-height: 150%;
      letter-spacing: 0.02em;
      color: #999999;
    }
  }
  .progress-bar{
    margin-top: 6px;
  }
`;

interface Props {
    color?: boolean
}

const SpendInMouth = (props: Props) => {
    return (
        <Container>
            <div className="total">
                <p>Ваши траты в этом месяце</p>
                <b style={{ color: `${ !props.color ?  '' : '#FFDD2D' }` }} >16 932,37₽</b>
            </div>
            <div className="progress-bar">
                <svg width="325" height="10" viewBox="0 0 325 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="324" height="10" rx="5" fill="#191919"/>
                    <rect width="325" height="10" rx="5" fill="#FB5146"/>
                    <path d="M0 5C0 2.23858 2.23858 0 5 0H311V10H5C2.23857 10 0 7.76142 0 5Z" fill="#8046FB"/>
                    <path d="M0 5C0 2.23858 2.23858 0 5 0H280V10H5C2.23857 10 0 7.76142 0 5Z" fill="#FFDD2D"/>
                    <path d="M0 5C0 2.23858 2.23858 0 5 0H190V10H5C2.23858 10 0 7.76142 0 5Z" fill="#007AFF"/>
                </svg>
            </div>
        </Container>
    );
};

export default SpendInMouth;