import Modal from 'react-modal';
import { Container, TransactionTypeContainer , RadioBox} from './style';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps{
  isOpen: boolean;
  onClose: () => void;
}

export function NewTransactionModal({isOpen , onClose}: NewTransactionModalProps){
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [type,setType] = useState('deposit');
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(event: FormEvent){
   
    event.preventDefault();

    const data = {
      title,
      value,
      type,
      category
    }

    api.post('/transactions', data)
    
  }

  return (
  <Modal 
  isOpen={isOpen} 
  onRequestClose={onClose} 
  className="react-modal-content" 
  overlayClassName="react-modal-overlay">

    <button 
    type="button" 
    onClick={onClose}
    className="react-modal-close">
     <img src={closeImg} alt="Fechar Modal"/>
    </button>

    <Container  onSubmit={handleCreateNewTransaction}>
      <h2>Cadastrar Transação</h2>

      <input  
      placeholder="Título"
      value={title}
      onChange={event => setTitle(event.target.value)}
      />

      <input 
      type="number" 
      placeholder="Valor"
      value={value}
      onChange={event => setValue(Number(event.target.value))}
      />

      <TransactionTypeContainer>
        <RadioBox 
        type="button"
        onClick={() => setType('deposit')}
        isActive={type === 'deposit'}
        activeColor='green'
        >
          <img src={incomeImg} alt="Entradas"/>
          <span>Entrada</span>
        </RadioBox>
        <RadioBox 
        type="button"
        onClick={() => setType('withdraw')}
        isActive={type === 'withdraw'}
        activeColor='red'
        >
          <img src={outcomeImg} alt="Saidas"/>
          <span>Saidas</span>
        </RadioBox>

      </TransactionTypeContainer>

      <input  
      placeholder="Categoria"
      value={category}
      onChange={event => setCategory(event.target.value)}
      />

      <button type="submit">
        Cadastrar 
      </button>
    </Container>
  </Modal>
  )
}