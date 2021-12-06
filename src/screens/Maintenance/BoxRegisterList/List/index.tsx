import { FormBox, Form } from './styles';

const List = () => {
  return (
    <FormBox>
      <Form>
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Km Atual</th>
              <th>Manutenção Solicitada</th>
              <th>Data e Hora</th>
              <th>Manutenção Realizada</th>
              <th>Kms Próxima Manutenção</th>
              <th>Valor R$</th>
              <th>Responsável</th>
              <th>Localização</th>
              <th>N° local</th>
              <th>Observação</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Carro</td>
              <td>1253</td>
              <td>Troca de óleo</td>
              <td>06/12/2021 às 15:33</td>
              <td>Troca de óleo</td>
              <td>11253</td>
              <td>105,60</td>
              <td>Gustavo Santos</td>
              <td>05569150</td>
              <td>539</td>
              <td>Foi satisfatório</td>
            </tr>
            <tr>
              <td>Carro</td>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
              <td>Mexico 1</td>
              <td>Mexico 2</td>
              <td>Mexico 3</td>
              <td>Mexico 4</td>
              <td>Mexico 5</td>
              <td>Mexico 5</td>
              <td>Mexico 6</td>
            </tr>
          </tbody>
        </table>
      </Form>
    </FormBox>
  );
};

export default List;
