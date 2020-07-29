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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {EditNewsComponent} from './edit-news/edit-news.component';
import { ToastComponent } from './components/toast/toast.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ListNewsComponent,
    ContainerDescriptionComponent,
    MainLayoutComponent,
    EditNewsComponent,
    MenuToolbarComponent,
    ToastComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
