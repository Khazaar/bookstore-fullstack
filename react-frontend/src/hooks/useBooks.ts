import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetStore, addBook } from '../features/bookStoreSlice';
import { getBooksApi } from '../services/books.services';

export const useBooks = () => {
  const dispatch = useDispatch();
  const getBooks = async () => {
    const books = await getBooksApi();
    dispatch(resetStore());
    for (const book of books) {
      dispatch(addBook(book));
    }
  };
  useEffect(() => {
    getBooks();
  }, []);
  return { getBooks };
};
