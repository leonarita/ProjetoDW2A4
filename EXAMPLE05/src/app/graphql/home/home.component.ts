import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from "graphql-tag";
import { Livro, LivroTitle, TodosLivros } from 'src/app/model/livro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  livros: Livro[] = [];
  livro: Livro;
  titulo: string;

  constructor(private router: Router, private route: ActivatedRoute, private apollo: Apollo) { }

  ngOnInit(): void {

    this.findAllTitleBooks();
  }

  findByTitle(titulo: string) {
    this.apollo.query<LivroTitle>({query: gql` { livro(titulo: "${titulo}") { id titulo subtitulo } } `}).subscribe(
      ({ data, loading }) => { this.livro = data.livro; },
      error => { this.livro = undefined; }
    )
  }

  findAllTitleBooks() {
    this.apollo.query<TodosLivros>({query: gql` { todosLivros { id titulo } } `}).subscribe(
      ({ data, loading }) => { this.livros = data.todosLivros; },
      error => { }
    )
  }

  deleteById(id: number) {
    this.apollo.mutate({mutation: gql` { deletarLivro(id: ${id}) { status } } `}).subscribe(data => this.findAllTitleBooks())
  }

  navigateToForm(id: number) {
    if(id === null) {
      this.router.navigate(['criar'], { relativeTo: this.route })
    }
    this.router.navigate(['editar', id], { relativeTo: this.route })
  }

}
