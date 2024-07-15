import { Component } from '@angular/core';
import { Fan } from '../../shared/models/fan.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-fanlist',
  templateUrl: './fanlist.component.html',
  styleUrl: './fanlist.component.css'
})
export class FanlistComponent {
  listeFan! : Fan[]
  selectedIndex! : number

  constructor(private authService : AuthService){
    this.listeFan = authService.listeFan
  }

  showDetail(index:number) {
    this.selectedIndex = index
  }

}
