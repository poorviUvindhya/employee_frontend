import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"add",
        component:AddComponent
    },
    {
        path:"search",
        component:SearchComponent
    },
    {
        path:"update",
        component:SearchComponent
    },
    {
        path:"delete",
        component:DeleteComponent
    }
];
