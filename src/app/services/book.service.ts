// src/app/books/book.service.ts
import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    { id: 1, 
      title: '1984', 
      author: 'George Orwell', 
      gender: 'Distopia clássica', 
      available: true,
      image: 'assets/images/1984.jpeg'      
      
    },
    { id: 2, 
      title: 'Dom Quixote', 
      author: 'Miguel de Cervantes', 
      gender: 'Romance clássico', 
      available: true, 
      image: 'assets/images/DomQuixote.jpg'
    },
    { id: 3, 
      title: 'Quem matou o Almirante?', 
      author: 'Agatha Christie', 
      gender: 'Mistério', 
      available: true, 
      image: 'assets/images/QuemMatouOAlmirante.jpeg'
    },
    { id: 4, 
      title: 'A Ilustre Casa de Ramires', 
      author: 'Eça de Queiroz', 
      gender: 'Literatura', 
      available: true,
      image: 'assets/images/AIlustreCasaDeRamires.jpeg'
    },
    { id: 5, 
      title: 'Memórias Póstumas de Brás Cubas', 
      author: 'Machado de Assis', 
      gender: 'Literatura', 
      available: true,
      image: 'assets/images/MemoriasPostumasDeBrasCubas.jpeg'
    },
    { id: 6, 
      title: 'Os Barcos de Papel', 
      author: 'Jose Maviael Monteiro', 
      gender: 'Literatura', 
      available: true, 
      image: 'assets/images/BarcosDePapel.jpeg'
    },       
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
