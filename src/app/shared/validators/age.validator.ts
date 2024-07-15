import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function AgeValidator(minAge : number) : ValidatorFn {
  return (control : AbstractControl) : ValidationErrors | null =>  {
    let birthdate : Date = new Date(control.value)
    let year : number = birthdate.getFullYear()
    if(!control.touched) return null
    if((new Date()).getFullYear() - year - minAge > 0) return null
    else return {"ageError" : "T'es trop jeune mon loulou"}
    return null
  }
}
