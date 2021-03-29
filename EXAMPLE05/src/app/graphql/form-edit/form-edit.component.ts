import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from "graphql-tag";
import { Livro, LivroId } from 'src/app/model/livro';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss']
})
export class FormEditComponent implements OnInit {

  livro: Livro = new Livro();

  constructor(private route: ActivatedRoute, private apollo: Apollo) {

    this.route.params.subscribe(parametros => {
      if (parametros['id']) {
        this.findById(parametros['id']);
      }
    })
  }

  ngOnInit(): void {
  }

  findById(id: number) {
    this.apollo.query<LivroId>({query: gql` { livroId(id: ${id}) { id titulo subtitulo isbn areaConhecimento codigoCatalogacao } } `}).subscribe(
      ({ data, loading }) => { this.livro = data.livroId; },
      error => { this.livro = undefined; }
    )
  }

}
