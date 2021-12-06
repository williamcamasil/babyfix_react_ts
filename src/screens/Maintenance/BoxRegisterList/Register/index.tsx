import { FormBox, Form, InputStyle, InputAddress } from './styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Maintence } from '../../../../types/maintence';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Maintence>();
  const onSubmit: SubmitHandler<Maintence> = data => console.log(data);

  return (
    <FormBox>
      <Form>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputStyle>
            <label>Tipo de Veículo</label>
            <input
              type="text"
              placeholder="Carro"
              {...(register('actualKm'), { required: true })}
            />
            {errors.actualKm && <span>Campo obrigatório</span>}
          </InputStyle>

          <InputStyle>
            <label>Km atual</label>
            <input
              type="number"
              placeholder="1000"
              {...(register('actualKm'), { required: true })}
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
              {...register('spent', { required: true })}
            />
            {errors.spent && <span>Campo obrigatório</span>}
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
                {...register('location', { required: true })}
              />
              {errors.location && <span>Campo obrigatório</span>}
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
        </form>
      </Form>
    </FormBox>
  );
};

export default Register;
