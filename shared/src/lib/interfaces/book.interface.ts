import { ObjectId } from 'typeorm';

export interface IBookEntity {
  id?: ObjectId;
  title: string;
  author: string;
  description: string;
  price: number;
}
