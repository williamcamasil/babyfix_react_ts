import { FormBox, Form } from './styles';
import { Maintence } from '../../../../types/maintence';
import vehiclesMock from '../../../../Mock/vehicles.json';
import { useEffect, useState } from 'react';

const List = () => {
  const [vehicles, setVehicles] = useState<Maintence[]>();

  useEffect(() => {
    setVehicles(vehiclesMock.veiculos);
  }, []);
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

          {vehicles?.map(vehicle => {
            return (
              <tbody key={vehicle.id}>
                <tr className="botyTable">
                  <td>{vehicle.type}</td>
                  <td>{vehicle.actualKm}</td>
                  <td>{vehicle.maintanceRequest}</td>
                  <td>{vehicle.date}</td>
                  <td>{vehicle.maintanceDone}</td>
                  <td>{vehicle.nextKmNeed}</td>
                  <td>{vehicle.spent}</td>
                  <td>{vehicle.responsable}</td>
                  <td>{vehicle.location}</td>
                  <td>{vehicle.numberLocation}</td>
                  <td>{vehicle.note}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </Form>
    </FormBox>
  );
};

export default List;
