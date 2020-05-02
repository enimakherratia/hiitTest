import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShortenerComponent } from './shortener/shortener.component';

const routes: Routes = [
  {
    path: '',
    component: ShortenerComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page2RoutingModule { }
