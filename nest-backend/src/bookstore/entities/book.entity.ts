import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ObjectIdColumn, ObjectId } from 'typeorm';
import { IBookEntity } from '@shared';

@Entity()
export class BookEntity implements IBookEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @ApiProperty({
    description: 'The title of the book',
    example: 'Title 1',
    type: String,
  })
  @Column()
  title: string;

  @ApiProperty({
    description: 'The author of the book',
    example: 'Author 1',
    type: String,
  })
  @Column()
  author: string;

  @Column()
  @ApiProperty({
    description: 'The author of the book',
    example: 'Description 1',
    type: String,
  })
  description: string;

  @ApiProperty({
    description: 'The price of the book',
    example: 100,
    type: Number,
  })
  @Column()
  price: number;
}
