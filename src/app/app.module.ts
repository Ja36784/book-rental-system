// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importe FormsModule aqui
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';


@NgModule({
  declarations: [AppComponent, BooksComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // Adicione isto para que as rotas funcionem
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
