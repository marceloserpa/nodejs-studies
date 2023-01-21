import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books/books.controller';
import { MetricsController } from './metrics/metrics.controller';

@Module({
  imports: [],
  controllers: [AppController, BooksController, MetricsController],
  providers: [AppService],
})
export class AppModule {}
