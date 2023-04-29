export class Pessoa {
    id!: string;
    nome!: string;
    idPessoaResponsavel!: string;
    sobreNome!: string;
    sexo!: string;
    idade!: number;
    endereco!: Endereco;
    telefones!: Telefone[];
  }
  
  export class Endereco {
    logradouro!: string;
    numero!: string;
    bairro!: string;
    cidade!: string;
    uf!: string;
    cep!: string;
  }
  
  export class Telefone {
    ddd!: string;
    numero!: string;
  }
  