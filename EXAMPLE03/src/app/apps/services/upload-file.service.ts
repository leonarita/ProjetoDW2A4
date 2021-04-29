import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private url: string;

  constructor(protected http: HttpClient) {
    this.url = 'http://localhost:8080/file';
  }

  upload(file: File): Observable<Blob> {
    return this.http.post<Blob>(this.url + '/uploadFileBin?filename=' + file.name, file, 
      {headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'}), responseType: 'blob' as 'json'}
    );
  }

}
