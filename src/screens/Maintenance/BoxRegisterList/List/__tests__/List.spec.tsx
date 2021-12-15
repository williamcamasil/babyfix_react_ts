import List from '..';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { formatPrice } from '../../../../../util/formatters';
import userEvent from '@testing-library/user-event';

describe('List', () => {
  afterEach(cleanup);

  it('should show data in the list', async () => {
    render(
      <BrowserRouter>
        <List />
      </BrowserRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText('Carro')).toBeInTheDocument();
      expect(screen.getByText('Moto')).toBeInTheDocument();
    });
  });

  it('should convert price to brazilian value', () => {
    expect(formatPrice(42.685)).toEqual('R$ 42,69');
  });

  it('should have class delete-item', () => {
    render(
      <BrowserRouter>
        <List />
      </BrowserRouter>,
    );

    const deleteMaintence = screen.getAllByTestId('click-delete-maintence')[0];
    userEvent.click(deleteMaintence);
    expect(deleteMaintence).toHaveClass('delete-item');
  });
});
