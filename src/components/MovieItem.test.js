import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieItem from './MovieItem';

test('popconfirm respons when delete button is clicked', () => {
  const handleDelete = jest.fn();
  const onClick = jest.fn();
  render(
    <MovieItem
      title='Iron Man'
      release='02/03/2010'
      handleDelete={handleDelete}
      active={false}
      onClick={onClick}
    />
  );

  const nullPopConfirmMessage = screen.queryByText(/delete "/i);
  expect(nullPopConfirmMessage).not.toBeInTheDocument();

  const deleteButton = screen.getByRole('img', { name: /delete/i });

  userEvent.click(deleteButton);

  const popConfirmMessage = screen.queryByText(/delete "/i);
  expect(popConfirmMessage).toBeInTheDocument();
})
