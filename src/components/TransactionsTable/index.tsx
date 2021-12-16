import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
    .then(response => response.json())
    .then(data => console.log(data))
  }, []);
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 6.000,00</td>
            <td>Software</td>
            <td>15/12/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.500,00</td>
            <td>Moradia</td>
            <td>05/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}