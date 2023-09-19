import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import { IBookEntity } from '@shared';
import { deleteBook } from '../services/books.services';
import { useBooks } from '../hooks/useBooks';

interface Props {
  books: IBookEntity[];
}

const BooksTable: React.FC<Props> = ({ books }) => {
  const { getBooks } = useBooks();
  return (
    <Paper elevation={3}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id?.toString()}>
              <TableCell>{book.id?.toString()}</TableCell>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.description}</TableCell>
              <TableCell>${book.price.toFixed(2)}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  onClick={async () => {
                    await deleteBook(book.id!.toString());
                    getBooks();
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default BooksTable;
