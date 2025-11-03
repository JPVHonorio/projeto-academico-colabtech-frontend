import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Loading } from '../loading/loading';
import { Informacoes } from './informacoes/informacoes';
import { Requisicoes } from './requisicoes/requisicoes';
import { AuthService } from '../../services/auth/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule, Informacoes, Requisicoes],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {

  //Injeções
  private authService = inject(AuthService);

  // Atributos
  abaPerfil: boolean = true;
  abaRequisicoes: boolean = false;
  abaPerfilStatus = 'active';
  abaRequisicoesStatus = '';

  constructor(
    private router: Router
  ) { }

  MostrarPerfil() {
    this.abaPerfil = true;
    this.abaRequisicoes = false;
    this.abaPerfilStatus = 'active';
    this.abaRequisicoesStatus = '';
  }

  MostrarRequisicoes() {
    this.abaPerfil = false;
    this.abaRequisicoes = true;
    this.abaPerfilStatus = '';
    this.abaRequisicoesStatus = 'active';
  }

  Sair() {
    this.authService.removerUsuarioLogado();
    this.router.navigate([''])
  }
}
