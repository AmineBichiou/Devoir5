import { Component, OnInit } from '@angular/core';
import { Films } from '../model/films.model';
import { MovService } from '../services/mov.service';
@Component({
  selector: 'app-addmovies',
  templateUrl: './addmovies.component.html',
  styleUrls: ['./addmovies.component.css']
})
export class AddmoviesComponent implements OnInit {
  newFilms = new Films();
  constructor(private MovService: MovService) { }
  addFilms(){
    this.MovService.ajouterFilms(this.newFilms);
    }
    

  ngOnInit(): void {
  }

}
