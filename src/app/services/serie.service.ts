import { Injectable } from '@angular/core';
import { Serie } from '../shared/models/serie.model';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  listeSerie : Serie[] = [
    {titre : "Friends", genre : "Soap", nbSaison : 10, synopsis : "Six abrutis dans deux apparts"},
    {titre : "The Walking Dead", genre : "Survie", nbSaison : 11, synopsis : "Les zombies servent a rien"},
    {titre : "The Boyz", genre : "Super-héros", nbSaison : 4, synopsis : "Enfin la vérité sur les super héros"},
    {titre : "A Game of Throne", genre : "Medieval-fantastic", nbSaison : 8, synopsis : "Vous attachez pas aux héros... ils meurent tous :p"},
  ]

  constructor() { }

  getByTitle(titre : string) {
    return this.listeSerie.find(x => x.titre == titre)
  }
}
