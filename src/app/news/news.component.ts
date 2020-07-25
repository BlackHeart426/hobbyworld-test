import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  htmlContent: any = ' На Украине расстреляли бизнесмена Игоря Плекана на глазах у его семилетнего сына. Плекан вместе с ребенком ехал\n' +
    '      на дачу в Киевской области. Недалеко от железнодорожного переезда из кустов выскочили неизвестные и начали в упор\n' +
    '      расстреливать машину из автоматов. В бизнесмена попали минимум четыре пули';
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onOpenNews(): void {
    this.router.navigate(['/news', '123']);
  }
}
