import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario-service';
import { Usuario, UsuarioLogin } from '../../models/usuario';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Loading } from '../loading/loading';
import { LoadingService } from '../../services/loading/loading';
import { Erro } from '../erro/erro';
import { ErroService } from '../../services/erro/erro';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, Loading, Erro],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  // Injeções
  private usuarioService = inject(UsuarioService);
  private loadingService = inject(LoadingService);
  private erroService = inject(ErroService);

  // Atributos
  email: string = '';
  senha: string = '';
  mensagemDeErro: string = 'E-mail ou senha não encontrados.';

  // Construtor
  constructor(
    private router: Router
  ) { }

  // Ao Iniciar o componente
  ngOnInit(): void {
  }

  // Métodos
  Entrar() {
    this.loadingService.mostrar();

    const dadosLogin: UsuarioLogin = {
      email: this.email,
      senha: this.senha
    }

    this.usuarioService.autorizarUsuario(dadosLogin).subscribe(
      (response: any) => {
        //Função
        this.loadingService.esconder();
        this.router.navigate(['/perfil'])
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

  RemoverErro() {
    this.erroService.esconder();
  }
}
