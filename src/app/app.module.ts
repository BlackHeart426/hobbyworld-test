import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { ContainerDescriptionComponent } from './components/container-description/container-description.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MenuToolbarComponent } from './components/menu-toolbar/menu-toolbar.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ListNewsComponent,
    ContainerDescriptionComponent,
    MainLayoutComponent,
    MenuToolbarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
