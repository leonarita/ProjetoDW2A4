export class Livro {

    idItemAcervo: number;

    id: number;
    titulo: string;
    subtitulo: string;

    dataPublicacao: Date = new Date();
    areaConhecimento: string = "";
    codigoCatalogacao: string = "";
    isbn: number = 111;

    tipoItem = "LIVRO";

    constructor(titulo?: string) {
        this.titulo = titulo;
    }
}

export class TodosLivros {
    todosLivros: Livro[]
}

export class LivroId {
    livroId: Livro
}

export class LivroTitle {
    livro: Livro
}

// CLASS, INTERFACE, ENUM

