import {
  FormBox,
  Form,
  InputStyle,
  InputAddress,
  Buttons,
  AddressBox,
} from './styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Maintence } from '../../../../types/maintence';
import Button from '../../../../components/Button';
import LinkButton from '../../../../components/LinkButton';
import vehiclesMock from '../../../../Mock/vehicles.json';
import { Address } from '../../../../types/address';

import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Register = () => {
  const [address, setAddress] = useState<Address>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Maintence>();
  const onSubmit: SubmitHandler<Maintence> = data => {
    const newItem = {
      id: Math.random(),
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
    toast('Item salvo com sucesso!');
  };

  const handleClearInputForm = () => {
    const elements = document.getElementsByTagName('input');
    for (let i = 0; i < elements.length; i++) {
      elements[i].value = '';
    }
  };

  const requestCep = (cep: string) => {
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => {
        setAddress(res.data);
      })
      .catch(err => {
        console.log('error: ', err);
        setAddress(undefined);
        toast('CEP Inválido.');
      });
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
              type="date"
              placeholder="26/10/2021"
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
              step="any"
              min="1"
              max="10000000"
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
                maxLength={8}
                placeholder="Insira seu cep: 05569150"
                {...register('location', { required: true })}
                onBlur={e => requestCep(e.target.value)}
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

          <AddressBox>
            {address ? (
              <div>
                <p>
                  {address?.localidade} - {address?.uf}
                </p>
                <p>{address?.logradouro}</p>
                <p>{address?.bairro}</p>
              </div>
            ) : (
              <p>-</p>
            )}
          </AddressBox>

          <InputStyle>
            <label>Observação</label>
            <textarea
              rows={4}
              cols={50}
              placeholder="Descreva a observação"
              {...register('note', { required: true })}
            />
            {errors.note && <span>Campo obrigatório</span>}
          </InputStyle>
        </Form>

        <Buttons>
          <Button
            text={'Salvar'}
            click={() => {
              handleSubmit(onSubmit);
            }}
          />
          <Button
            text={'Limpar'}
            click={() => {
              handleClearInputForm();
            }}
          />
          <LinkButton to="/manutencao/lista" text="Lista" />
        </Buttons>
      </form>
    </FormBox>
  );
};

export default Register;
