import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../interface';

@Injectable({providedIn: 'root'})
export class NewsService {
  constructor(private _http: HttpClient) {
  }

  getAll(): Observable<any> {

    return this._http.get('https://lenta.ru/rss/top7', {
      headers: new HttpHeaders()
        .set('Content-Type', 'text/xml')
        .append('Access-Control-Allow-Methods', 'GET')
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Headers',
          'Content-Type, Authorization, Content-Length, X-Requested-With'),
      responseType: 'text'
    });
  }
}
