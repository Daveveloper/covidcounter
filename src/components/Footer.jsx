import React from 'react'
import {FaCoffee} from 'react-icons/fa';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FlexFooter>
      <div>
        <small>
          <span>#covidcount</span> no almacena informacion de ningun tipo de sus usuarios, el unico fin de esta aplicacion es comparar la informacion suministrada por las autoridades sanitarias.<br/>
          <span>Por favor comparta esta aplicacion con todos los que pueda.</span><br/>
          <span
            style={{
              backgroundColor: 'var(--secondary)',
              color: 'var(--ligth)',
              padding: 3,
            }}>
            #quedateencasa
          </span>
        </small>
      </div>
      <div>
        <p><FaCoffee size={18} style={{verticalAlign: 'bottom'}}/> Invitame un cafe</p>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_donations" />
          <input type="hidden" name="business" value="J7VD8JPMW69LQ" />
          <input type="hidden" name="item_name" value="Recibir donaciones por mi contenido" />
          <input type="hidden" name="currency_code" value="USD" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_CR/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    </FlexFooter>
  )
}

const FlexFooter = styled.footer`
  @media(min-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export default Footer
