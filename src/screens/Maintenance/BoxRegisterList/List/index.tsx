import { FormBox, Form } from './styles';

const List = () => {
  return (
    <FormBox>
      <Form>
        <table>
          <thead>
            <tr>
              <th>Km Atual</th>
              <th>Manutenção Solicitada</th>
              <th>Data e Hora</th>
              <th>Manutenção Realizada</th>
              <th>Kms Próxima Manutenção</th>
              <th>Valor R$</th>
              <th>Responsável</th>
              <th>Localização</th>
              <th>Observação</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Germany 1</td>
              <td>Germany 2</td>
              <td>Germany 3</td>
              <td>Germany 4</td>
              <td>Germany 5</td>
              <td>Germany 6</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
              <td>Mexico 1</td>
              <td>Mexico 2</td>
              <td>Mexico 3</td>
              <td>Mexico 4</td>
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
