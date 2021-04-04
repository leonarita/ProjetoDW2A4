import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Livro, LivroGraphQL } from '../model/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private url: string;
  private urlGraphQL: string;
  private livros: BehaviorSubject<Livro[]> = new BehaviorSubject(null);

  constructor(protected http: HttpClient) {
    this.url = 'http://localhost:8080/livro/parametros';
    this.urlGraphQL = 'http://localhost:8080/graphql';

    this.getAllByParameter(null);
  }

  getData(): Observable<Livro[]> {
    return this.livros.asObservable();
  }
  
  public getAllByParameter(title: string) {
    this.http.get<Livro[]>(title === null ? this.url : this.url + '?title=' + title).subscribe(
      data => this.livros.next(data)
    );
  }

  public getDataGraphQL(body: string): Observable<LivroGraphQL> {
    return this.http.post<LivroGraphQL>(this.urlGraphQL, body);
  }

  updateData(title: string) {
    this.getAllByParameter(title);
  }
}
