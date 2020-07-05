import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import Chart from './Chart';
import {MdClear, MdDone} from 'react-icons/md'
import LineChart from './LineChart';
import {firebaseContext} from './../firebase';

const Graphics = () => {

  const [data, setData] = useState([]);
  const [voto, setVoto] = useState(localStorage.getItem('voto'));

  const {firebase} = useContext(firebaseContext);

  useEffect(() =>{
    const fetchData = async () => {
      const documents = await firebase.db.collection('confirmados').get();
      const casos = documents.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      });
      setData(casos[0]);
    };
    fetchData();
  }, []);

  const handleYes = () => {
    localStorage.setItem('voto', true);
    setVoto(localStorage.getItem('voto'));
    const count = data.positivos + 1;

    firebase.db.collection('confirmados').doc(data.id).set({
      ...data,
      positivos: count,
    })

    setData({
      ...data,
      positivos: count,
    });
  };

  const handleNo = () => {
    localStorage.setItem('voto', true);
    setVoto(localStorage.getItem('voto'));
    const count = data.negativos + 1;

    firebase.db.collection('confirmados').doc(data.id).set({
      ...data,
      negativos: count,
    })

    setData({
      ...data,
      negativos: count,
    });
  }


  return (
    <Container>
      <div>
        <h2>¿ha sido diagnosticado positivo con COVID-19?</h2>
        <Legend>Su respuesta sera utilizada unica y exclusivamente con el fin de completar esta encuesta.<br/> Apelamos a la buena voluntad de los usuarios ya que no utilizamos ningun tipo de informacion con la que podamos diferenciar a cada quien.</Legend>
        {
          !voto ?
          <div>
            <button className="btnRed" onClick={handleYes}><MdDone style={{verticalAlign: 'bottom'}} size={16}/> SI</button>
            <button onClick={handleNo}><MdClear style={{verticalAlign: 'bottom'}} size={16}/> NO</button>
          </div> :
          <span>Gracias por su respuesta</span>
        }
      </div>
      <div>
      {
        data &&
        <>
          <Chart yes={data.positivos} no={data.negativos}/>
          <Number>No: {data.negativos}</Number> <Number yes>Si: {data.positivos}</Number>
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

const Legend = styled.p`
  width: 100%;
  margin: auto;
  margin-bottom: 10px;
  font-size: 0.85rem;


  @media (min-width: 768px) {
    width: 70%;
  }
`;
export default Graphics;
