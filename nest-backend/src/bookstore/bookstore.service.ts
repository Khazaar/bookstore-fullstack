import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookstoreService {
  constructor(
    @InjectRepository(BookEntity) private bookRepository: Repository<BookEntity>
  ) {}
  async create(book: BookEntity) {
    try {
      return await this.bookRepository.save(book);
    } catch (e) {
      return new InternalServerErrorException(e);
    }
  }
  async findAll(): Promise<BookEntity[]> {
    return await this.bookRepository.find();
  }
  async delete(id: string) {
    return await this.bookRepository.delete(id);
  }
}
