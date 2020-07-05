import React, {useState, useEffect}from 'react';
import styled from 'styled-components';
import Counter from './Counter';
import apiclient from './../api';
import moment from 'moment';
import Graphics from './Graphics';
import LineChart from './LineChart';
import {MdUpdate, MdHealing} from 'react-icons/md';

const DashBoard = () => {

  const [datos, guardarDatos] = useState([]);

  useEffect(() =>{
    apiclient.get()
    .then(response => {
      guardarDatos(response.data[response.data.length - 1]);
    });
  }, []);

  const {Date, Confirmed, Active, Deaths, Recovered} = datos;
  let date = '';
  if (Date) {
    date = Date.substring(0,10);
  }
  return (
    <Dash>
      <FlexContainer>
        <div>
          <Label><MdHealing size={32} style={{verticalAlign: 'middle'}}/> Recuperados: {Recovered}</Label>
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
          <small>Nota: La informacion se actualiza con el ultimo reporte del Ministerio de Salud cada dia a las 12:00 AM.</small>
          <p>
            <MdUpdate size={28} style={{verticalAlign: 'middle'}}/> Actualizado: <span>{datos && moment(date).format('DD / MMMM / YYYY')}</span>
          </p>
        </div>
        <Graphics/>
      </FlexContainer>
      <hr/>
      <LineChart/>
    </Dash>
  )
}


const Dash = styled.div`
  margin: 20px 20px 40px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ExtraInfo = styled.div`
  flex: 1;
  margin-top: 20px;
  padding: 20px;
  justify-content: space-around;
`;

const Label = styled.h2`
  width: 90%;
  margin: auto;
  padding: 10px;
  color: var(--light);
  background: #db3a34;
`;

export default DashBoard;
