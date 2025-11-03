import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Loading } from '../loading/loading';
import { Informacoes } from './informacoes/informacoes';
import { Requisicoes } from './requisicoes/requisicoes';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule, Informacoes, Requisicoes],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {

  // Atributos
  abaPerfil: boolean = true;
  abaRequisicoes: boolean = false;
  abaPerfilStatus = 'active';
  abaRequisicoesStatus = '';

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
}
