import { Component, OnInit } from '@angular/core';
import xml2js from 'xml2js';
import {NewsService} from '../services/news.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {
  private xmlItems: unknown;

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
  // .subscribe(data => {
  //     console.log('qwe')
  //     let parseString = xml2js.parseString;
  //     parseString(data, (err, result: NewsRss) => {
  //       this.RssData = result;
  //     });
  //   });
    this.newsService.getAll().subscribe((data) => {
      console.log('test');
      this.parseXML(data)
        .then((data) => {
          console.log(data);
          this.xmlItems = data;
        });
    });
  }

  parseXML(data) {
    return new Promise(resolve => {
      var k: string | number,
        arr = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
      parser.parseString(data, function (err, result) {
        let obj = result.Employee;
        for (k in obj.emp) {
          let item = obj.emp[k];
          arr.push({
            id: item.id[0],
            name: item.name[0],
            gender: item.gender[0],
            mobile: item.mobile[0]
          });
        }
        resolve(arr);
      });
    });
  }

}
