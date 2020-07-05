import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import Chart from './Chart';
import {MdClear, MdDone} from 'react-icons/md'
import LineChart from './LineChart';
import {firebaseContext} from './../firebase';

const Graphics = () => {

  const [data, setData] = useState([]);

  const {firebase} = useContext(firebaseContext);

  useEffect(() => {
    const obtenerProductos = () => {
      firebase.db.collection('confirmados').onSnapshot((snapshot) => {
        const casos = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        });
        setData(casos);
      });
    }
    obtenerProductos();
  }, []);

  const handleYes = () => {
    // setYes(yes + 1);
  };

  const handleNo = () => {
    // setNo(no + 1);
  }

  return (
    <Container>
      <div>
        <h2>¿ha sido diagnosticado positivo con COVID-19?</h2>
        <button className="btnRed" onClick={handleYes}><MdDone style={{verticalAlign: 'bottom'}} size={16}/> SI</button>
        <button onClick={handleNo}><MdClear style={{verticalAlign: 'bottom'}} size={16}/> NO</button>
      </div>
      <div>
      {
        data.length > 0 &&
        <>
          <Chart yes={data[0].positivos} no={data[0].negativos}/>
          <Number>No: {data[0].negativos}</Number> <Number yes>Si: {data[0].positivos}</Number>
        </>
      }
      </div>
      <hr/>
      <div>
        <LineChart/>
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

const Number = styled.h2`
  display: inline;
  color: ${props => props.yes ? 'var(--ligth)' : 'var(--secondary)'};
  background-color: ${props => props.yes ? 'var(--secondary)' : 'var(--light)'};
  padding: 10px;
  border-radius: 10px;
`;

export default Graphics;
