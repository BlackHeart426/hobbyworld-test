import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {News} from '../interface';
import {NewsService} from '../services/news.service';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularEditorConfig} from '@kolkov/angular-editor';

@Component({
  selector: 'app-edit-news',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  news: News;
  loading = true;
  config: AngularEditorConfig = {
    editable: false,
    showToolbar: false,
    maxHeight: '170px',
    minHeight: '170px',
    outline: false
  };

  constructor(
    private newsService: NewsService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
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
        this.loading = false;
      }
    );
  }

  onMenu(): void {
    this.router.navigate(['/']);
  }
}
