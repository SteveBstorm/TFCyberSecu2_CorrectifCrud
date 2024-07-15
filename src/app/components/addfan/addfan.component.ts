import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SerieService } from '../../services/serie.service';
import { Serie } from '../../shared/models/serie.model';
import { AgeValidator } from '../../shared/validators/age.validator';

@Component({
  selector: 'app-addfan',
  templateUrl: './addfan.component.html',
  styleUrl: './addfan.component.css'
})
export class AddfanComponent {
  fg! : FormGroup
  listeSerie! : Serie[]


  constructor(
    private builder : FormBuilder,
    private authService : AuthService,
    private serieService : SerieService
  ){
    this.listeSerie = serieService.listeSerie

    this.fg = builder.group({
      nom : [null, Validators.required],
      password : [null, [Validators.required, Validators.minLength(8)]],
      dateNaissance : [null, AgeValidator],
      listeSerie : builder.array([])
    })
  }

  getSerieArray() : FormArray {
    return this.fg.get("listeSerie") as FormArray
  }

  addSerieToList() {
    this.getSerieArray().push(new FormControl(null, Validators.required))
  }

  onSubmit() {
    console.log(this.fg.value)
    this.authService.addFan(this.fg.value)
  }
}
