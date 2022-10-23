import { Component, OnInit } from '@angular/core';
import { Films } from '../model/films.model';
import { MovService } from '../services/mov.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  Films: Films[];
    constructor(private MovService: MovService ) {
      this.Films = MovService.listeFilms();
      }
      supprimerFilms(p: Films)
{
 //console.log(p);
 let conf = confirm("Etes-vous sûr ?");
 if (conf)
this.MovService.supprimerFilms(p);
}


        
  ngOnInit(): void {
  }

}
