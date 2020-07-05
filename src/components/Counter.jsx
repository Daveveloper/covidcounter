import React from 'react';
import styled from 'styled-components';
import {MdSentimentDissatisfied, MdTrendingUp} from 'react-icons/md';

const Counter = ({count = 0, label, warning}) => {

  return (
    <Panel warning={warning}>
      <h2>
      {
        warning ?
        <MdSentimentDissatisfied style={{verticalAlign: 'middle', marginRight: 5}}/> :
        <MdTrendingUp style={{verticalAlign: 'middle', marginRight: 5}}/>
      }
        {label}
      </h2>
      <h1>{count}</h1>
    </Panel>
  )
}

const Panel = styled.div`
  border: 1px solid var(--secondary);
  background-color: ${props => props.warning ? '#db3a34' : 'transparent'};
  border-radius: 10px;
  margin:10px;
  text-align: center;
  flex-direction: column;

  h2 {
    color: var(--light);
    border-bottom-size: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${props => props.warning ? 'white' : 'var(--secondary)'};
    background-color: #db3a34;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  h1 {
    font-size: 5rem;
    letter-spacing: 15px;
    color: white;
  }

  @media (min-width: 768px) {
    width: 45%;

    h1 {
      font-size: 7rem;
    }
  }
`;

export default Counter
