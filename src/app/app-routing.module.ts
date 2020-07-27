import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsComponent} from './news/news.component';
import {ListNewsComponent} from './list-news/list-news.component';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {EditNewsComponent} from './edit-news/edit-news.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {
        path: '', redirectTo: '/list-news', pathMatch: 'full'
      },
      {
        path: 'news/:id', component: NewsComponent
      },
      {
        path: 'edit-news/:id', component: EditNewsComponent
      },
      {
        path: 'list-news', component: ListNewsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
