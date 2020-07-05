import React, {useState, useEffect}from 'react';
import styled from 'styled-components';
import Counter from './Counter';
import apiclient from './../api';
import moment from 'moment';
import Graphics from './Graphics';
import {MdUpdate} from 'react-icons/md';

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
      <p><MdUpdate size={28} style={{verticalAlign: 'middle'}}/> : <span>{datos && moment(date).format('DD / MMMM / YYYY')}</span></p>
      <hr/>
      <Graphics/>
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
