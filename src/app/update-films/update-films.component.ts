import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovService } from '../services/mov.service';
import { Films } from '../model/films.model';
@Component({
  selector: 'app-update-films',
  templateUrl: './update-films.component.html',
  styles: [
  ]
})
export class UpdateFilmsComponent implements OnInit {
  currentFilm=new Films();

  constructor(private activatedRoute: ActivatedRoute,private router:Router,private MovService: MovService) { }

  ngOnInit(): void {
    this.currentFilm = this.MovService.consulterProduit(this.activatedRoute.snapshot. params['id']);
console.log(this.currentFilm);
  }
  updateFilms()
{ //console.log(this.currentProduit);
this.MovService.updateFilms(this.currentFilm);
this.router.navigate(['movies']);
}

}
