import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Register from '..';
import { server } from './fixtures';

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
