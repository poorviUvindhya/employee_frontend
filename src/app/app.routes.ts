import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"add",
        component:AddComponent
    }
];



@NgModule({
    imports: [
      RouterModule.forRoot(routes),
      // other imports...
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
