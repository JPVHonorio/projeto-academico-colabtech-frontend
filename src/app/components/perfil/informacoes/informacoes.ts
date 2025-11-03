import { Component, inject } from '@angular/core';
import { UsuarioService } from '../../../services/usuario/usuario-service';
import { LoadingService } from '../../../services/loading/loading-service';
import { ErroService } from '../../../services/erro/erro-service';
import { AuthService } from '../../../services/auth/auth-service';
import { Usuario } from '../../../models/usuario';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Loading } from '../../loading/loading';

@Component({
  selector: 'app-informacoes',
  imports: [CommonModule, FormsModule, Loading],
  templateUrl: './informacoes.html',
  styleUrl: './informacoes.css',
})
export class Informacoes {

  // Injeções
  private usuarioService = inject(UsuarioService);
  private loadingService = inject(LoadingService);
  private erroService = inject(ErroService);
  private authService = inject(AuthService);

  usuarioLogado: Usuario | null = this.authService.obterUsuarioLogado();

  nome: string = '';
  email: string = '';
  senha: string = '';
  posicao: string = '';
  telefone: string = '';
  rua: string = '';
  bairro: string = '';
  numero: string = '';
  cidade: string = '';
  estado: string = '';
  pais: string = '';
  cep: string = '';
  urlImagem: string = '';

  // Métodos
  Salvar() {
    if (this.usuarioLogado != null) {
      this.loadingService.mostrar();

      this.usuarioLogado.nome = this.nome != '' ? this.nome : this.usuarioLogado.nome;
      this.usuarioLogado.email = this.email != '' ? this.email : this.usuarioLogado.email;
      this.usuarioLogado.senha = this.senha != '' ? this.senha : this.usuarioLogado.senha;
      this.usuarioLogado.posicao = this.posicao != '' ? this.posicao : this.usuarioLogado.posicao;
      this.usuarioLogado.telefone = this.telefone != '' ? this.telefone : this.usuarioLogado.telefone;
      this.usuarioLogado.rua = this.rua != '' ? this.rua : this.usuarioLogado.rua;
      this.usuarioLogado.bairro = this.bairro != '' ? this.bairro : this.usuarioLogado.bairro;
      this.usuarioLogado.numero = this.numero != '' ? this.numero : this.usuarioLogado.numero;
      this.usuarioLogado.cidade = this.cidade != '' ? this.cidade : this.usuarioLogado.cidade;
      this.usuarioLogado.estado = this.estado != '' ? this.estado : this.usuarioLogado.estado;
      this.usuarioLogado.pais = this.pais != '' ? this.pais : this.usuarioLogado.pais;
      this.usuarioLogado.cep = this.cep != '' ? this.cep : this.usuarioLogado.cep;
      this.usuarioLogado.urlImagem = this.urlImagem != '' ? this.urlImagem : this.usuarioLogado.urlImagem;

      this.usuarioService.atualizarUsuario(this.usuarioLogado).subscribe(
        (response: Usuario) => {
          //Função
          this.loadingService.esconder();
          this.authService.armazenarUsuarioLogado(response);
        },
        (error: HttpErrorResponse) => {
          this.loadingService.esconder();

          setTimeout(() => {
            this.erroService.mostrar();
          }, 3200);

          console.log("Entrar Erro:", error.message)
        }

      );
    }

  }
}
