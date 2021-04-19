import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import Modal from 'react-modal';
import { GlobalStyle } from "./styles/global";

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
  <>  
    <Header onOpenNewTransactionModal={HandleOpenNewTransactionModal}/>
    <Dashboard />

    <NewTransactionModal 
    isOpen={isNewModalTransactionOpen} 
    onClose={HandleCloseNewTransactionModal}
    />
    
    <GlobalStyle />
  </>
  )
}

export default App;
