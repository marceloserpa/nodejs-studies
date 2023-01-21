import { Controller, Get } from '@nestjs/common';
import { BookDTO } from './book.dto';

@Controller('books')
export class BooksController {

    @Get()
    findAll(): BookDTO[] {

        let books: BookDTO[] = [];
        const shining = new BookDTO();
        shining.author = 'Stephen King';
        shining.title = 'Shining';
        books.push(shining)

        return books;
    }

}