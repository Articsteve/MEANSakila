import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  film: any[];
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getFilmDetails(this.route.snapshot.params['id']);
  }
  getFilmDetails(id) {
  this.api.getFilmDet(id)
    .subscribe(data => {
      console.log(data);
      this.film = data;
    });
  }
}
