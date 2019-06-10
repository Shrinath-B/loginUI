import { HomePageComponent } from './home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'signup',
        component: SignupFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomePageRoutingModule { }
