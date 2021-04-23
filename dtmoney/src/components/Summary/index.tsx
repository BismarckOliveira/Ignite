import Income from '../../assets/income.svg'
import Outcome from '../../assets/outcome.svg'
import Total from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions';
import { Container } from './styles';

export function Summary(){
  const { transactions } = useTransactions()

  const sumary = transactions.reduce((acc, transaction) => {
    if( transaction.type === 'deposit'){
      acc.deposit += transaction.amount;
      acc.total += transaction.amount;
    } 
    else {
      acc.withdraw += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  },
  {
    deposit: 0,
    withdraw: 0,
    total: 0,
  });

 
  
   
  

  return (
    <Container>
    <div>
      <header>
        <p>Entrada</p>
        <img src={Income} alt="Entrada"/>
      </header>
      <strong>{new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(sumary.deposit)}</strong>
    </div>
    <div>
      <header>
        <p>Saidas</p>
        <img src={Outcome} alt="Saidas"/>
      </header>
      <strong>-{new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(sumary.withdraw)}</strong>
    </div>
    <div className="total">
      <header>
        <p>Total</p>
        <img src={Total} alt="Total"/>
      </header>
      <strong>{new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(sumary.total)}</strong>
    </div>
  </Container>
  )
  
}