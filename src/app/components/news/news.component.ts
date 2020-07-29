import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {News} from '../../interface';
import {AngularEditorConfig} from '@kolkov/angular-editor';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Input() news: News;
  htmlContent = '';
  config: AngularEditorConfig = {
    editable: false,
    showToolbar: false,
    maxHeight: '170px',
    minHeight: '170px',
    outline: false
  };
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onOpenNews(id): void {
    this.router.navigate(['/news', id]);
  }

  onEditNews(id): void {
    this.router.navigate(['/edit-news', id]);
  }
}
