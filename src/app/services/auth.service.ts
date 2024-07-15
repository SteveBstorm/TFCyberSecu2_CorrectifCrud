import { Injectable } from '@angular/core';
import { Fan } from '../shared/models/fan.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  listeFan : Fan[] = [
    {nom : 'Steve', password : 'Test1234', dateNaissance : new Date(1983, 6, 28),
      listeSerie : [
        {titre : "The Boyz", genre : "Super-héros", nbSaison : 4, synopsis : "Enfin la vérité sur les super héros"},
    {titre : "A Game of Throne", genre : "Medieval-fantastic", nbSaison : 8, synopsis : "Vous attachez pas aux héros... ils meurent tous :p"},
      ]
    }
  ]

  constructor() { }

  addFan(newFan : Fan) : void {
    this.listeFan.push(newFan)
    console.log(this.listeFan)
  }

  login(nom : string, password : string) : boolean {
    let loggedUserIndex : number = this.listeFan.findIndex(x => x.nom == nom && x.password == password)

    if(loggedUserIndex > -1)
    {
      localStorage.setItem("currentUser", JSON.stringify(this.listeFan[loggedUserIndex]))
      return true
    }
    else{
      console.log("login foireux")
      return false
    }
    //let currentFan : Fan = JSON.parse(localStorage.getItem("currentUser") ?? "")
  }

  getFanByIndex(index : number) : Fan {
    return this.listeFan[index]
  }
}
