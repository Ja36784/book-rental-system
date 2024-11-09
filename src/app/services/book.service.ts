// src/app/books/book.service.ts
import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    { id: 1, title: '1984', author: 'George Orwell', gender: 'Distopia clássica', available: true },
    { id: 2, title: 'Dom Quixote', author: 'Miguel de Cervantes', gender: 'Romance clássico', available: true },
    { id: 3, title: 'Quem matou?', author: 'Agatha Christie', gender: 'Mistério', available: true },
  ];

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  updateBook(updatedBook: Book): void {
    const index = this.books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
  }

  deleteBook(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
  }

  toggleAvailability(id: number): void {
    const book = this.books.find(book => book.id === id);
    if (book) {
      book.available = !book.available;
    }
  }
}
