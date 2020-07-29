import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsComponent} from './components/news/news.component';
import {ListNewsComponent} from './list-news/list-news.component';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {EditNewsComponent} from './edit-news/edit-news.component';
import {NewsPageComponent} from './news-page/news-page.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {
        path: '', redirectTo: '/list-news', pathMatch: 'full'
      },
      {
        path: 'news/:uuid', component: NewsPageComponent
      },
      {
        path: 'edit-news/:uuid', component: EditNewsComponent
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
