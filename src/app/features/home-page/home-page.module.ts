import { HomePageService } from './services/home-page.service';
import { HomePageRoutingModule } from './home-page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupFormComponent } from './signup-form/signup-form.component';
import { HomePageComponent } from './home-page.component';

import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomePageComponent, SignupFormComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    SharedModule
  ],
  providers: [HomePageService]
})
export class HomePageModule { }
