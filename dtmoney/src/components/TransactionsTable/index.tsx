import {Container} from './styles'

export function TransactionsTable() {
  return (
   <Container>
    <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tr>
          <td>Desenvolvimento de WebSite</td>
          <td className="deposit">R$10.000</td>
          <td>Venda</td>
          <td>13/04/2021</td>
        </tr>
        <tr>
          <td>Hamburguer</td>
          <td className="withdraw">- R$50</td>
          <td>Alimentação</td>
          <td>03/04/2021</td>
        </tr>
      </table>
   </Container>
  )
}