import React, {useState, useEffect}from 'react';
import styled from 'styled-components';
import Counter from './Counter';
import apiclient from './../api';
import moment from 'moment';
import Graphics from './Graphics';

const DashBoard = () => {

  const [datos, guardarDatos] = useState([]);

  useEffect(() =>{
    apiclient.get()
    .then(response => {
      guardarDatos(response.data[response.data.length - 1]);
    });
  }, []);

  const {Date, Confirmed, Active, Deaths} = datos;
  let date = '';
  if (Date) {
    date = Date.substring(0,10);
    console.log(date);
  }
  return (
    <Dash>
      <ExtraInfo>
        {
          datos &&
          <>
            <Counter label='Casos confirmados' count={Confirmed}/>
            <Counter label='Casos activos:' count={Active} />
            <Counter label='Fallecimientos:' count={Deaths} warning={true}/>
          </>
        }
      </ExtraInfo>
      <p>Ultima actualizacion: <span>{datos && moment(date).format('DD / MMMM / YYYY')}</span></p>
      <Graphics/>
      <small>
        <span>#covidcount</span> no almacena informacion de ningun tipo de sus usuarios, el unico fin de esta aplicacion es comparar la informacion suministrada por las autoridades sanitarias.<br/>
        <span>Por favor comparta esta aplicacion con todos los que pueda.</span>
      </small>
    </Dash>
  )
}


const Dash = styled.div`
  margin: 20px 20px 40px;
`;

const ExtraInfo = styled.div`
  flex: 1;
  margin-top: 20px;
  padding: 20px;
  justify-content: space-around;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export default DashBoard;
