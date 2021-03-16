export class Livro {

    idItemAcervo: number;

    titulo: string;
    dataPublicacao: Date = new Date();
    areaConhecimento: string = "";
    codigoCatalogacao: string = "";
    isbn: number = 111;

    tipoItem = "LIVRO";

    constructor(titulo?: string) {
        this.titulo = titulo;
    }
}

// CLASS, INTERFACE, ENUM

