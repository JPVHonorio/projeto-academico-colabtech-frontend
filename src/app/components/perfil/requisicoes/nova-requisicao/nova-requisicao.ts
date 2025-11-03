import { Component, EventEmitter, inject, Output } from '@angular/core';
import { NovaRequisicaoService } from '../../../../services/nova-requisicao/nova-requisicao-service';
import { RequisicaoService } from '../../../../services/requisicao/requisicao-service';
import { Requisicao } from '../../../../models/requisicao';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth/auth-service';
import { Usuario } from '../../../../models/usuario';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nova-requisicao',
  imports: [CommonModule, FormsModule],
  templateUrl: './nova-requisicao.html',
  styleUrl: './nova-requisicao.css',
})
export class NovaRequisicao {
  // Injeções
  private authService = inject(AuthService);
  private requisicaoService = inject(RequisicaoService);
  private novaRequisicaoService = inject(NovaRequisicaoService);

  // Atributos
  mostrarModal = this.novaRequisicaoService.ativado;
  usuarioLogado: Usuario | null = this.authService.obterUsuarioLogado();
  novaRequisicao: Requisicao = {
    usuarioId: Number(this.usuarioLogado!.id),
    nome: "",
    status: 1,
    setor: ""
  }

  nome: string = "";
  setor: string = "";

  constructor(
    private router: Router
  ) { }

  Esconder() {
    this.novaRequisicaoService.esconder();
  }

  Enviar() {

    this.novaRequisicao.nome = this.nome;
    this.novaRequisicao.setor = this.setor;


    this.requisicaoService.adicionarRequisicao(this.novaRequisicao).subscribe(
      (response: Requisicao) => {
        this.requisicaoService.obterRequisicoesDoUsuario(this.usuarioLogado!.id).subscribe(
          (response: Requisicao[]) => {
            this.Atualizar()
            this.novaRequisicaoService.esconder();
          },
          (error: HttpErrorResponse) => {
            console.log("Nova Requisicao Erro:", error.message)
          }

        );
      },
      (error: HttpErrorResponse) => {
        console.log("Nova Requisicao Erro:", error.message)
      }

    );
  }

  Atualizar() {
    if (this.usuarioLogado) {
      this.requisicaoService.AtualizarLista(this.usuarioLogado.id);
    }
  }
}
