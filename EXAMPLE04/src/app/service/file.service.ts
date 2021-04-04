import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(protected http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<{}>> {
    
    const form: FormData = new FormData();
    form.append('file', file);

    console.log(file.type)

    const newRequest = new HttpRequest('POST', 'http://localhost:8080/file/upload', form, {
      reportProgress: true,
      responseType: 'text'
    })

    return this.http.request(newRequest); 
  }

}
