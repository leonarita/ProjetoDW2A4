import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/model/livro';
import { Location } from '@angular/common';
import { LivrosService } from 'src/app/service/livros.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  livros: Livro[];
  livro: Livro = new Livro();

  constructor(private livroService: LivrosService, private snackBar: MatSnackBar, private location: Location) { }

  ngOnInit(): void {
    this.loadDataByBackend();
  }

  loadDataByBackend() {
    this.livroService.getAll().subscribe(data => 
      this.livros = data  
    );
  }

  openSnackBar(message: string, action: string = "Fechar") {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  validarLivros() {
    return this.livros === undefined || this.livros.length === undefined || this.livros.length === 0;
  }

  voltar() {
    this.location.back();
  }

  cadastrar() {
    this.livroService.save(this.livro).subscribe(
      data => {
        this.livro = new Livro()
        this.loadDataByBackend()
      },
      error => this.openSnackBar("Erro ao salvar livro")
    );
  }

  deleteById(id: number) {
    this.livroService.delete(id).subscribe({
      next: () => {
        this.loadDataByBackend()
      },
      error: err =>  this.openSnackBar("Erro ao deletar livro")
    })
  }

}
