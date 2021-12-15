import { rest } from 'msw';
import { setupServer } from 'msw/node';

const localization = {
  cep: '05569-150',
  logradouro: 'Rua Padre Samuel Fritz',
  bairro: 'Jardim João XXIII',
  localidade: 'São Paulo',
  uf: 'SP',
};

export const server = setupServer(
  rest.get('https://viacep.com.br/ws/05569150/json/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(localization));
  }),
);
