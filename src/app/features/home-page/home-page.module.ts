import { HomePageService } from './services/home-page.service';
import { HomePageRoutingModule } from './home-page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupFormComponent } from './signup-form/signup-form.component';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HomePageComponent, SignupFormComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    SharedModule,
    NgbModule
  ],
  providers: [HomePageService]
})
export class HomePageModule { }
