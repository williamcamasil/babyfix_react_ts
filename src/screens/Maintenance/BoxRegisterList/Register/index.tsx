import { FormBox, Form, InputStyle, InputAddress, Buttons } from './styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Maintence } from '../../../../types/maintence';
import Button from '../../../../components/Button';
import LinkButton from '../../../../components/LinkButton';
import vehiclesMock from '../../../../Mock/vehicles.json';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Maintence>();
  const onSubmit: SubmitHandler<Maintence> = data => {
    const newItem = {
      //TODO: insert ramdom id and message confirmation saving
      id: 8,
      typeVehicle: data.typeVehicle,
      actualKm: data.actualKm,
      maintanceRequest: data.maintanceRequest,
      date: data.date,
      maintanceDone: data.maintanceDone,
      nextKmNeed: data.nextKmNeed,
      spent: data.spent,
      responsable: data.responsable,
      location: data.location,
      numberLocation: data.numberLocation,
      note: data.note,
    };

    vehiclesMock.veiculos.push(newItem);
  };

  return (
    <FormBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form>
          <InputStyle>
            <label>Tipo de Veículo</label>
            <input
              type="text"
              placeholder="Carro"
              {...register('typeVehicle', { required: true })}
            />
            {errors.typeVehicle && <span>Campo obrigatório</span>}
          </InputStyle>

          <InputStyle>
            <label>Km atual</label>
            <input
              type="number"
              placeholder="1000"
              {...register('actualKm', { required: true })}
            />
            {errors.actualKm && <span>Campo obrigatório</span>}
          </InputStyle>

          <InputStyle>
            <label>Manutenção solicitada</label>
            <input
              type="text"
              placeholder="Descreva a manutenção"
              {...register('maintanceRequest', { required: true })}
            />
            {errors.maintanceRequest && <span>Campo obrigatório</span>}
          </InputStyle>

          <InputStyle>
            <label>Data e hora</label>
            <input
              type="text"
              placeholder="26/10/2021 às 11:00"
              {...register('date', { required: true })}
            />
            {errors.date && <span>Campo obrigatório</span>}
          </InputStyle>

          <InputStyle>
            <label>Manutenção realizada</label>
            <input
              type="text"
              placeholder="Descreva a manutenção realizada"
              {...register('maintanceDone', { required: true })}
            />
            {errors.maintanceDone && <span>Campo obrigatório</span>}
          </InputStyle>

          <InputStyle>
            <label>Kms para a próxima manutenção</label>
            <input
              type="text"
              placeholder="1000"
              {...register('nextKmNeed', { required: true })}
            />
            {errors.nextKmNeed && <span>Campo obrigatório</span>}
          </InputStyle>

          <InputStyle>
            <label>Valor Gasto R$</label>
            <input
              type="number"
              placeholder="452,75"
              {...register('spent', { required: true })}
            />
            {errors.spent && <span>Campo obrigatório</span>}
          </InputStyle>

          <InputStyle>
            <label>Responsável pela manutenção (Mecânico)</label>
            <input
              type="text"
              placeholder="Nome do mecânico"
              {...register('responsable', { required: true })}
            />
            {errors.responsable && <span>Campo obrigatório</span>}
          </InputStyle>

          <InputAddress>
            <InputStyle>
              <label>Localização</label>
              <input
                type="text"
                placeholder="Insira o endereço"
                {...register('location', { required: true })}
              />
              {errors.location && <span>Campo obrigatório</span>}
            </InputStyle>

            <InputStyle>
              <label>N° local</label>
              <input
                type="text"
                placeholder="N° local"
                {...register('numberLocation', { required: true })}
              />
              {errors.numberLocation && <span>Campo obrigatório</span>}
            </InputStyle>
          </InputAddress>

          <InputStyle>
            <label>Observação</label>
            <input
              type="text"
              placeholder="Descreva a observação"
              {...register('note', { required: true })}
            />
            {errors.note && <span>Campo obrigatório</span>}
          </InputStyle>
        </Form>

        <Buttons>
          <Button
            text={'Limpar'}
            click={() => {
              console.log('Limpar');
            }}
          />
          <Button
            text={'Salvar'}
            click={() => {
              handleSubmit(onSubmit);
            }}
          />
          <LinkButton to="/manutencao/lista" text="Lista" />
        </Buttons>
      </form>
    </FormBox>
  );
};

export default Register;
