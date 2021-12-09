import { FormBox, Form, Buttons } from './styles';
import { Maintence } from '../../../../types/maintence';
import vehiclesMock from '../../../../Mock/vehicles.json';
import { useEffect, useState } from 'react';
import Button from '../../../../components/Button';
import LinkButton from '../../../../components/LinkButton';
import { toast } from 'react-toastify';
import { formatPrice } from '../../../../util/formatters';

const List = () => {
  const [vehicles, setVehicles] = useState<Maintence[]>([]);
  const [flag, setFlag] = useState<boolean>();

  useEffect(() => {
    setVehicles(vehiclesMock.veiculos);
    console.log('Setting vehicles');
  }, [flag]);

  const handleDeleteItem = (id: number) => {
    const confirmation = confirm('Você tem certeza que deseja deletar o item?');
    if (confirmation == true) {
      vehicles.splice(id, 1);
      setFlag(!flag);
      toast(`Item de id ${id} deletado com sucesso`);
    }
  };

  return (
    <FormBox>
      <Form>
        {vehicles.length !== 0 ? (
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

            {vehicles?.map((vehicle, index) => {
              return (
                <tbody key={vehicle.id}>
                  <tr className="botyTable">
                    <td>{vehicle.typeVehicle}</td>
                    <td>{vehicle.actualKm}</td>
                    <td>{vehicle.maintanceRequest}</td>
                    <td>{vehicle.date}</td>
                    <td>{vehicle.maintanceDone}</td>
                    <td>{vehicle.nextKmNeed}</td>
                    <td>{formatPrice(vehicle.spent)}</td>
                    <td>{vehicle.responsable}</td>
                    <td>{vehicle.location}</td>
                    <td>{vehicle.numberLocation}</td>
                    <td>{vehicle.note}</td>

                    <td>
                      <Button
                        text={'Excluir'}
                        click={() => {
                          handleDeleteItem(index);
                        }}
                      />{' '}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        ) : (
          <p>Não tem itens na lista</p>
        )}
      </Form>

      <Buttons>
        <LinkButton to="/manutencao/registrar" text="Registrar" />
      </Buttons>
    </FormBox>
  );
};

export default List;
