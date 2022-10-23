import { Injectable } from '@angular/core';
import { Films } from '../model/films.model';

@Injectable({
  providedIn: 'root'
})
export class MovService {
  Films: Films[];
  Film! : Films;
  constructor() { 
    this.Films = [
      {idFilms : 1, nomFilms : "The Man from Toronto",GenreFilms : "Comedy",RateFilms : 3.7, dateCreation : new Date("03/18/2022")},
      {idFilms : 2, nomFilms : "Deep Water",GenreFilms : "Drama",RateFilms : 2.5, dateCreation : new Date("06/24/2022")},
      {idFilms : 3, nomFilms : "DayShift",GenreFilms : "Action",RateFilms : 3.9, dateCreation : new Date("08/12/2022")},
    ];
  }
  consulterProduit(id:number): Films{
    this.Film = this.Films.find(p => p.idFilms == id)!;
    return this.Film;
    }
  listeFilms():Films[] {
    return this.Films;
}
ajouterFilms( prod: Films){
  this.Films.push(prod);

  }
  supprimerFilms( prod: Films){

    const index = this.Films.indexOf(prod, 0);
    if (index > -1) {
    this.Films.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
  }
  trierFilms(){
    this.Films = this.Films.sort((n1,n2) => {
    if (n1.idFilms! > n2.idFilms!) {
    return 1;
    }
    if (n1.idFilms! < n2.idFilms!) {
    return -1;
    }
    return 0;
    });
    }
  updateFilms(p:Films)
{
// console.log(p);
this.supprimerFilms(p);
this.ajouterFilms(p);
this.trierFilms();
}
}

