import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookstoreModule } from '../bookstore/bookstore.module';
import { BookEntity } from '../bookstore/entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27018,
      database: 'bookstore',
      entities: [BookEntity],
      synchronize: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: 'admin',
      username: 'root',
      password: 'example',
    }),
    BookstoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
