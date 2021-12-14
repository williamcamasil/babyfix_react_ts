import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Register from '..';
import { server } from './fixtures';
import { ToastContainer } from 'react-toastify';
import vehiclesMock from '../../../../../Mock/vehicles.json';

describe('Input values', () => {
  it('should show error when do not type any value', async () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>,
    );

    const submitButton = screen.getByRole('button', { name: /salvar/i });

    userEvent.click(submitButton);
    await waitFor(() => {
      const messages = screen.getAllByText('Campo obrigatório');
      expect(messages).toHaveLength(11);
    });
  });

  it('should save new maintance', async () => {
    render(
      <BrowserRouter>
        <Register />
        <ToastContainer />
      </BrowserRouter>,
    );

    const newItem = {
      id: 2,
      typeVehicle: 'Moto do batman',
      actualKm: 1000,
      maintanceRequest: 'Troca de óleo',
      date: '26/10/2021',
      maintanceDone: 'Troca de óleo',
      nextKmNeed: 4000,
      spent: 435.36,
      responsable: 'João Pereira',
      location: '05569150',
      numberLocation: '29',
      note: 'Gostei dos serviços',
    };

    vehiclesMock.veiculos.push(newItem);

    const submitButton = screen.getByRole('button', { name: /salvar/i });
    userEvent.click(submitButton);

    expect(vehiclesMock.veiculos[2].typeVehicle).toEqual('Moto do batman');
  });

  it('should clear input', async () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>,
    );

    const typeVehicleInput = screen.getByTestId('type-vehicle-input');
    userEvent.type(typeVehicleInput, 'Carro');

    const clearButton = screen.getByRole('button', { name: /limpar/i });
    userEvent.click(clearButton);

    expect(typeVehicleInput).toHaveValue('');
  });
});

describe('Input API value', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('should validate cep', async () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>,
    );

    const cepInput = screen.getByTestId('location-input');
    userEvent.type(cepInput, '05569150');
    const numberCepInput = screen.getByTestId('number-localization-input');
    userEvent.type(numberCepInput, '29');

    await waitFor(() => {
      expect(screen.getByText('Rua Padre Samuel Fritz')).toBeInTheDocument();
    });
  });
});
