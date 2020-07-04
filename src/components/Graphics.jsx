import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Chart from './Chart';

const Graphics = () => {

  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);

  const handleYes = () => {
    setYes(yes + 1);
  };

  const handleNo = () => {
    setNo(no + 1);
  }

  return (
    <Container>
      <div>
        <h2>¿ha sido diagnosticado positivo con COVID-19?</h2>
        <button className="btnRed" onClick={handleYes}>SI</button>
        <button onClick={handleNo}>NO</button>
      </div>
      <div>
        <Chart yes={yes} no={no}/>
      </div>
    </Container>
  )
}

const Container = styled.div`
  margin: 50px 0;

  div:nth-child(2) {
    margin: 40px auto;
  }

  @media(min-width: 768px) {
    div:nth-child(2) {
    width: 50%;
    margin: 40px auto;
  }
  }
`;

export default Graphics;
