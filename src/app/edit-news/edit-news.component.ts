import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {News} from '../interface';
import {NewsService} from '../services/news.service';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss']
})
export class EditNewsComponent implements OnInit {
  form: FormGroup;
  news: News;
  loading = true;
  htmlContent: any = '';
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
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
    private newsService: NewsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    });
    this.form.disable();

    this.route.params
      .pipe(
        switchMap((params: Params) => {
          if (params.uuid) {
            return this.newsService.getById(params.uuid);
          }
          return of(null);
        })
      ).subscribe(
      (news: News) => {
        this.news = news;
        this.form.patchValue(
          {
            title: news.title,
            description: news.description
          }
        );
        this.form.enable();
        this.loading = false;
      }
    );
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const news: any = {
      title: this.form.value.title,
      description: this.form.value.description
    };

    this.newsService.update(this.news.uuid, news).subscribe(res => {
      console.log('Данные сохранены');
    });

  }

  onMenu(): void {
    this.router.navigate(['/']);
  }
}
