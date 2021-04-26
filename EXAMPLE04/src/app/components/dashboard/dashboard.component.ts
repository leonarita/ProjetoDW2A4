import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from 'src/app/model/livro';
import { FileService } from 'src/app/service/file.service';
import { LivroService } from 'src/app/service/livro.service';
import { ReactiveService } from 'src/app/service/reactive.service';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  date: string;
  name: string;
  length: number;

  livros: Livro[];
  livrosGraphQL: Livro[];

  dateNow: string = moment().format("DD/MM/YYYY HH:MM:SS");
  file: File = null;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private reactiveService: ReactiveService, private livroService: LivroService, private fileService: FileService, private router: Router, private route: ActivatedRoute) {

    this.reactiveService.getDate().subscribe(date => this.date = date.toString());
    this.reactiveService.getName().subscribe(name => this.name = name);
    this.reactiveService.getLengthName().subscribe(length => this.length = length);

    this.livroService.getData().subscribe(data => this.livros = data);
  }

  ngOnInit(): void {
    let queryGraphQL = '{ todosLivros { id titulo } }';

    this.livroService.getDataGraphQL(queryGraphQL).subscribe(data => {
      console.log(data)
      this.livrosGraphQL = data.data.todosLivros;
    });
  }

  updateData($event) {
    this.reactiveService.updateData($event);
  }

  filterData($event) {
    this.livroService.updateData($event);
  }

  onFileSelected(event) {
    this.file = event.target.files[0];
    this.progress.percentage = 0;

    this.fileService.upload(this.file).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      }
    })
  }

  irParaInfiniteScroll() {
    this.router.navigate(['infinite-scroll-v1'], { relativeTo: this.route })
  }

}
