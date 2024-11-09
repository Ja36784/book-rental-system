// src/app/books/books.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  newBook: Book = {
    id: 0,
    title: '',
    author: '',
    gender: '',
    available: true,
  };
  
  editBook: Book | null = null; // Armazena o livro que está sendo editado

  constructor(
    private bookService: BookService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  addBook(): void {
    if (this.newBook.title && this.newBook.author) {
      this.newBook.id = Math.max(...this.books.map((b) => b.id), 0) + 1; // Cria ID único
      this.bookService.addBook(this.newBook);
      this.newBook = {
        id: 0,
        title: '',
        author: '',
        gender: '',
        available: true,
      };
    }
  }

  startEdit(book: Book): void {
    this.editBook = { ...book };
  }

  saveEdit(): void {
    if (this.editBook) {
      this.bookService.updateBook(this.editBook);
      this.editBook = null;
      this.books = this.bookService.getBooks();
    }
  }

  cancelEdit(): void {
    this.editBook = null;
  }

  deleteBook(id: number): void {
    if (confirm('Deseja realmente deletar este livro?')) {
      this.bookService.deleteBook(id);
      this.books = this.bookService.getBooks();
    }
  }

  toggleAvailability(id: number): void {
    this.bookService.toggleAvailability(id);
    this.books = this.bookService.getBooks();
  }
}
