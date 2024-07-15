import { Serie } from "./serie.model"

export interface Fan {
  nom : string
  password : string
  dateNaissance : Date
  listeSerie? : Serie[]
}
