import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AddfanComponent } from './components/addfan/addfan.component';
import { FanlistComponent } from './components/fanlist/fanlist.component';
import { FanprofileComponent } from './components/fanprofile/fanprofile.component';
import { SeriedetailComponent } from './components/seriedetail/seriedetail.component';
import { AddserieComponent } from './components/addserie/addserie.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddfanComponent,
    FanlistComponent,
    FanprofileComponent,
    SeriedetailComponent,
    AddserieComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    FieldsetModule,
    CardModule,
    DropdownModule,
    CalendarModule,
    FloatLabelModule,
    TableModule,
    DynamicDialogModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
