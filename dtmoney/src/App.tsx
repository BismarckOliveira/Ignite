import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import Modal from 'react-modal';
import { GlobalStyle } from "./styles/global";
import  {TransactionsProvider} from './hooks/useTransactions'

Modal.setAppElement('#root');

function App() {
 const [isNewModalTransactionOpen,setIsNewModalTransactionOpen] = useState(false);

 function HandleOpenNewTransactionModal(){
   setIsNewModalTransactionOpen(true);
 }

 function HandleCloseNewTransactionModal(){
   setIsNewModalTransactionOpen(false);
 }


  return (
  <TransactionsProvider>  
    <Header onOpenNewTransactionModal={HandleOpenNewTransactionModal}/>
    <Dashboard />

    <NewTransactionModal 
    isOpen={isNewModalTransactionOpen} 
    onClose={HandleCloseNewTransactionModal}
    />
    
    <GlobalStyle />
  </TransactionsProvider>
  )
}

export default App;
