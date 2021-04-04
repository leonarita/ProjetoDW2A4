export class Livro {

    titulo: string;

    constructor(titulo?: string) {
        this.titulo = titulo;
    }
}

export class LivroGraphQL {
    data: {
        todosLivros: Livro[];
    }
}
