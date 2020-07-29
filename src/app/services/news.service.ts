import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../interface';
import { from } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({providedIn: 'root'})
export class NewsService {
  constructor(private _http: HttpClient) {
  }

  getAll(): Observable<News[]> {
    return this._http.get<News[]>('https://hobbyworld-35f1c.firebaseio.com/news.json')
      .pipe(
        map((items) => {
          return Object
            .keys(items)
            .map(key => ({
              ...items[key], uuid: key
            }));
        })
      );
  }

  getById(uuid): Observable<News> {
    return this._http.get<News>(`https://hobbyworld-35f1c.firebaseio.com/news/${uuid}.json`)
      .pipe(
        map(items => {
          return {...items, uuid};
        })
      );
  }

  update(uuid, news): Observable<News> {
    return this._http.patch<News>(`https://hobbyworld-35f1c.firebaseio.com/news/${uuid}.json`, news);
  }
}
