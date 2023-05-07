import { EnderecoModel } from './EnderecoModel';
import { TelefoneModel } from './TelefoneModel';

export class PessoaModel {
    id: number = 0;
    idEndereco: number = 0;
    idPessoaResponsavel: number = 0;
    nome: string = "";
    sobreNome: string = "";
    sexo: string = "";
    idade: number = 0;
    endereco: EnderecoModel = new EnderecoModel();
    telefones: TelefoneModel[] = [];
}
