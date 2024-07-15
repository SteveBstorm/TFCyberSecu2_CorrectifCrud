import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Fan } from '../../shared/models/fan.model';
import { DialogService } from 'primeng/dynamicdialog';
import { SeriedetailComponent } from '../seriedetail/seriedetail.component';

@Component({
  selector: 'app-fanprofile',
  templateUrl: './fanprofile.component.html',
  styleUrl: './fanprofile.component.css'
})
export class FanprofileComponent {
  @Input() set index(value : number) {
    this.currentFan = this.authService.getFanByIndex(value)
    console.log(this.currentFan)
  }

  // Exemple full prop typescript
  // private _index! : number
  // public get Index() : number {
  //   return this._index;
  // }

  // public set Index(value : number) {
  //   this._index = value
  // }

  currentFan! : Fan
  constructor(private authService : AuthService,
    private dialogService : DialogService
  ){

  }


  showSerie(titre : string) {
    this.dialogService.open(SeriedetailComponent, {
      header : 'Détail de ' + titre,
      data : {titrechoisi : titre}
    })
  }
}
