import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../model/livro';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private url: string;

  constructor(protected http: HttpClient) {
    this.url = 'http://localhost:8080/livro';
  }

  public getAll(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.url);
  }

  public save(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.url, livro);
  }

  public delete(id: number): Observable<Livro> {
    return this.http.delete<Livro>(`${this.url}/${id}`);
  }

}
