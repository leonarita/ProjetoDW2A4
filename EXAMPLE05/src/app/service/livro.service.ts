import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import gql from "graphql-tag";
import { Livro, TodosLivros } from '../model/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private apollo: Apollo) { }

  
}
