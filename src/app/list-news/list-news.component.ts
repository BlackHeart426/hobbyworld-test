import { Component, OnInit } from '@angular/core';
import xml2js from 'xml2js';
import {NewsService} from '../services/news.service';
import {News} from '../interface';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {

  public listNews: News[] = [];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {

    this.newsService.getAll().subscribe(data => {
      this.listNews = data;
    });
  }
}

// tslint:disable-next-line:typedef
async function postData(url = '', data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
  })
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, 'text/xml'))
    .then(data => console.log(data));
}
