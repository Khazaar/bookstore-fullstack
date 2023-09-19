import { IBookEntity } from '@shared';
import { API_BASE_URL } from '../constants';

export const getBooksApi = async () => {
  const response = await fetch(API_BASE_URL + 'bookstore');
  if (!response.ok) throw new Error('Failed to fetch books');
  return (await response.json()) as Promise<IBookEntity[]>;
};

export const createBook = async (book: IBookEntity) => {
  const response = await fetch(API_BASE_URL + 'bookstore', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  return await response.json();
};

export const deleteBook = async (id: string) => {
  const response = await fetch(API_BASE_URL + 'bookstore/' + id, {
    method: 'DELETE',
  });
  return await response.json();
};
