import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../interface';
import { from } from 'rxjs';
@Injectable({providedIn: 'root'})
export class NewsService {
  constructor(private _http: HttpClient) {
  }

  getAll(): Observable<News[]> {
    return this._http.get<News[]>('http://localhost:3000/news');
  }

  getById(id): Observable<News> {
    return this._http.get<News>(`http://localhost:3000/news/${id}`);
  }

  update(id, news): Observable<News> {
    return this._http.patch<News>(`http://localhost:3000/news/${id}`, news)
  }
}
