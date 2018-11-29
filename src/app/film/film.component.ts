import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  films: any;
  displayedColumns = ['Title', 'Category', 'Rating'];
  dataSource = new FilmDataSource(this.api);
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getFilm()
    .subscribe(res => {
      console.log(res);
      this.films = res;
      console.log(this.films)
    }, err => {
      console.log(err);
    });
  }

}

export class FilmDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getFilm();
  }

  disconnect() {

  }
}
