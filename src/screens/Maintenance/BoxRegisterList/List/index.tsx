import { FormBox, Form, Buttons } from './styles';
import { Maintence } from '../../../../types/maintence';
import vehiclesMock from '../../../../Mock/vehicles.json';
import { useEffect, useState } from 'react';
import Button from '../../../../components/Button';
import LinkButton from '../../../../components/LinkButton';
import { toast } from 'react-toastify';

const List = () => {
  const [vehicles, setVehicles] = useState<Maintence[]>([]);

  useEffect(() => {
    setVehicles(vehiclesMock.veiculos);
    console.log('Setting vehicles');
  }, []);

  const handleDeleteItem = (id: number) => {
    console.log('VEHICLES_1 ', vehiclesMock.veiculos);
    vehiclesMock.veiculos.splice(id, 1);
    console.log('VEHICLES_2 ', vehiclesMock.veiculos);
    // console.log('VEHICLES', vehicles);
    // vehicles.splice(id, 1);
    // console.log('VEHICLES', vehicles);
    toast(`Item de id ${id} deletado com sucesso`);
  };

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
              <th>Exluir?</th>
            </tr>
          </thead>

          {vehicles?.map(vehicle => {
            console.log('Creating Table');
            return (
              <tbody key={vehicle.id}>
                <tr className="botyTable">
                  <td>{vehicle.typeVehicle}</td>
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

                  <td>
                    <Button
                      text={'Excluir'}
                      click={() => {
                        handleDeleteItem(vehicle.id);
                      }}
                    />{' '}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </Form>

      <Buttons>
        {/* <Button
          text={'Excluir'}
          click={() => {
            // handleDeleteItem();
            console.log('Excluido');
          }}
        /> */}
        <LinkButton to="/manutencao/registrar" text="Registrar" />
      </Buttons>
    </FormBox>
  );
};

export default List;
