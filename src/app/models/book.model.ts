// src/app/books/book.model.ts
export interface Book {
    id: number;
    title: string;
    author: string;
    gender: string;
    available: boolean;
    image?: string;    
  }