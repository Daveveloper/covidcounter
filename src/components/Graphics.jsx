import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import Chart from './Chart';
import {firebaseContext} from './../firebase';
import {FaUserSecret} from 'react-icons/fa';

const Graphics = () => {

  const [voto, setVoto] = useState(localStorage.getItem('voto'));
  const [casosPositivos, setCasosPositivos] = useState(0);
  const [casosNegativos, setCasosNegativos] = useState(0);

  const {firebase} = useContext(firebaseContext);

  useEffect(() =>{
    const fetchData = async () => {
      const positives = await firebase.db.collection('votes').where('answer', '==', 'yes').get();
      let casos = positives.docs.length;
      setCasosPositivos(casos);

      const negatives = await firebase.db.collection('votes').where('answer', '==', 'no').get();
      casos = negatives.docs.length;
      setCasosNegativos(casos);
    };

    fetchData();
    console.log('Corriendo...');
  }, [casosNegativos, casosPositivos]);



  const handleVotes = (e) => {
    e.preventDefault();
    const answer = e.target.dataset.vote;
    const vote = {
      answer,
      creado: Date.now(),
    };
    firebase.db.collection('votes').add(vote);
    localStorage.setItem('voto', true);
    setVoto(localStorage.getItem('voto'));
    if (answer === 'yes') {
      setCasosPositivos(casosPositivos + 1);
    } else {
      setCasosNegativos(casosNegativos + 1);
    }
  }

  return (
    <Container>
      <div>
        <h1>¿ha sido diagnosticado positivo con COVID-19?</h1>
        <Legend><FaUserSecret size={24} style={{verticalAlign: 'bottom'}}/> Encuesta anonima</Legend>
        <Legend>Su respuesta sera utilizada unica y exclusivamente con el fin de completar esta encuesta.</Legend>
        {
          !voto ?
          <div>
            <button
              data-vote='yes'
              className="btnRed"
              onClick={handleVotes}>
                SI
            </button>
            <button
              data-vote='no'
              onClick={handleVotes}>
                NO
            </button>
          </div> :
          <span>Gracias por su respuesta</span>
        }
      </div>
      <div>
        <Chart yes={casosPositivos} no={casosNegativos}/>
        <Number>No: {casosNegativos}</Number> <Number yes>Si: {casosPositivos}</Number>
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
  margin: auto;
  margin-bottom: 10px;
  font-size: 0.85rem;


  @media (min-width: 768px) {
    width: 70%;
  }
`;
export default Graphics;
