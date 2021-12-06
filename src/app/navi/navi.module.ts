import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Tab1Component } from '../tab1/tab1.component';
import { Tab2Component } from '../tab2/tab2.component';

const jj: Routes = [
 {
  path: 'tab1',
  component: Tab1Component ,
 },
 {
  path: 'tab2',
  component: Tab2Component ,
 },
 ];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(jj)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class NaviModule { }