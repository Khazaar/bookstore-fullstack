import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { BookstoreService } from './bookstore.service';
import { BookEntity } from './entities/book.entity';
import { ApiBody, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('bookstore')
@Controller('bookstore')
export class BookstoreController {
  constructor(private readonly bookstoreService: BookstoreService) {}

  @ApiOperation({ summary: 'Create a new book' })
  @ApiBody({ type: BookEntity, description: 'Book to be created' })
  @Post()
  async create(@Body() createBody: BookEntity) {
    return await this.bookstoreService.create(createBody);
  }

  @ApiOperation({ summary: 'Get all books' })
  @ApiOkResponse({ type: [BookEntity], description: 'List of books' })
  @Get()
  async findAll() {
    return await this.bookstoreService.findAll();
  }

  @ApiOperation({ summary: 'Delete book by Id' })
  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return await this.bookstoreService.delete(id);
  }
}
