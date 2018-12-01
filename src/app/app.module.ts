import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";

import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmDetailComponent } from './film-detail/film-detail.component';

const appRoutes: Routes = [
  {
    path: 'film',
    component: FilmComponent,
    data: { title: 'Film List' }
  },
  {
    path: 'film-details/:id',
    component: FilmDetailComponent,
    data: { title: 'Film Details' }
  },
  { path: '',
    redirectTo: '/film',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmDetailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
