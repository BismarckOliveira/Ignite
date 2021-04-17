import Income from '../../assets/income.svg'
import Outcome from '../../assets/outcome.svg'
import Total from '../../assets/total.svg'
import { Container } from './styles';

export function Summary(){

  return (
    <Container>
    <div>
      <header>
        <p>Entrada</p>
        <img src={Income} alt="Entrada"/>
      </header>
      <strong>R$1000,00</strong>
    </div>
    <div>
      <header>
        <p>Saidas</p>
        <img src={Outcome} alt="Saidas"/>
      </header>
      <strong>- R$1000,00</strong>
    </div>
    <div className="total">
      <header>
        <p>Total</p>
        <img src={Total} alt="Total"/>
      </header>
      <strong>R$500,00</strong>
    </div>
  </Container>
  )
  
}