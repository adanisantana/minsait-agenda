import { Contatos } from './contatos'

export interface Pessoa {
  id: number;
  nome: string;
  endereco: string;
  cep: string;
  cidade: string;
  uf: string;
  contatos: Contatos[];
}
