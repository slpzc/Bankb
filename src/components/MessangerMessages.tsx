import React, {useEffect} from 'react';
import styled from 'styled-components'
import {observer} from "mobx-react-lite";
import {IMessages} from "../interfaces/MessegesInterface";



const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 100px;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .wrapper {
    width: 100%;
    display: flex;

    &.to {
      .message {
        background: #3D3D3D;
        border-radius: 10px 10px 10px 4px;

        p:first-child {
          color: #FFFFFF;
        }

        p:last-child {
          color: #AAAAAA;
        }
      }
    }

    &.me {
      justify-content: flex-end;

      .message {
        background-color: #FFDD2D;
        border-radius: 10px 10px 4px 10px;

        p:first-child {
          color: #000000;
        }

        p:last-child {
          color: rgba(0, 0, 0, 0.3);
        }
      }
    }
  }

  .message {
    max-width: 223px;
    margin-top: 24px;
    padding: 7px 42px 21px 15px;
    position: relative;
    display: flex;
    flex-direction: column;

    p:first-child {
      font-weight: 600;
      font-size: 12px;
      line-height: 150%;
      letter-spacing: 0.02em;
      max-width: 166px;
    }

    p:last-child {
      position: absolute;
      bottom: 6px;
      right: 15px;
      font-weight: 400;
      font-size: 10px;
      line-height: 150%;
      letter-spacing: 0.02em;
    }

  }
`;

interface Props {
    message: Array<IMessages>
}

const MessangerMessages = observer(({message}: Props) => {

    useEffect(() => {
        console.log(message)
    }, [])
    return (
        <Container>

            {
                message.map(({from, message, date}, key) => (
                    <div key={key} className={`wrapper ${from == 'Алексей' ? 'me' : 'to'} `}>
                        <div className='message'>
                            <p>{message}</p>
                            <p> {date} </p>
                        </div>
                    </div>
                ))
            }

        </Container>
    );
});

export default MessangerMessages;