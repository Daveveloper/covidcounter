import React from 'react';
import styled from 'styled-components';

const Counter = ({count = 0, label, warning}) => {

  return (
    <Panel warning={warning}>
      {
        label ?
        <p>{label}</p> :
        <p>Cuenta de <span>count-covid:</span></p>
      }
      <h1>{count}</h1>
    </Panel>
  )
}

const Panel = styled.div`
  padding: 10px;
  border: 1px solid var(--accent);
  border-radius: 10px;
  margin:10px;
  text-align: center;
  flex-direction: column;

  p {
    color: var(--light);
  }

  h1 {
    font-size: 5rem;
    letter-spacing: 15px;
    color: ${props => props.warning ? 'crimson' : 'white'};
  }

  @media (min-width: 768px) {
    width: 45%;

    h1 {
      font-size: 7rem;
    }
  }
`;

export default Counter
