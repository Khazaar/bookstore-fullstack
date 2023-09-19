import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import {
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
  Box,
  Divider,
} from '@mui/material';
import BooksTable from './books.component';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../features/store';
import { IBookEntity } from '@shared';
import { addBook, resetStore } from '../features/bookStoreSlice';
import { createBook } from '../services/books.services';
import { useBooks } from '../hooks/useBooks';

export default function StoreComponent() {
  useBooks();
  const books = useSelector((state: RootState) => state.books.value);
  const [newBook, setNewBook] = useState<IBookEntity>({
    title: '',
    author: '',
    description: '',
    price: 0,
  });
  const { getBooks } = useBooks();
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography>Add new book</Typography>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={newBook.title}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setNewBook({ ...newBook, title: event.target.value });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Author"
            variant="outlined"
            value={newBook.author}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setNewBook({ ...newBook, author: event.target.value });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            value={newBook.description}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setNewBook({ ...newBook, description: event.target.value });
            }}
          />
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            value={newBook.price}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setNewBook({ ...newBook, price: Number(event.target.value) });
            }}
          />
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={async () => {
              createBook(newBook);
              getBooks();
            }}
          >
            Add
          </Button>
        </CardActions>
      </Card>
      <Divider component="li" />
      <BooksTable books={books} />
    </Box>
  );
}
