import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Serie } from '../../shared/models/serie.model';
import { SerieService } from '../../services/serie.service';

@Component({
  selector: 'app-seriedetail',
  templateUrl: './seriedetail.component.html',
  styleUrl: './seriedetail.component.css'
})
export class SeriedetailComponent {

  currentSerie! : Serie | undefined

  constructor(
    private dialogRef : DynamicDialogConfig,
    private serieService : SerieService
  ) {
    let titre = dialogRef.data["titrechoisi"]
    this.currentSerie = serieService.getByTitle(titre)
  }
}
