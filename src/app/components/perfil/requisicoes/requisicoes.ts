import { Component, inject } from '@angular/core';
import { RequisicaoService } from '../../../services/requisicao/requisicao-service';
import { Requisicao } from '../../../models/requisicao';
import { AuthService } from '../../../services/auth/auth-service';
import { Usuario } from '../../../models/usuario';
import { HttpErrorResponse } from '@angular/common/http';
import { NovaRequisicao } from './nova-requisicao/nova-requisicao';
import { NovaRequisicaoService } from '../../../services/nova-requisicao/nova-requisicao-service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-requisicoes',
  imports: [NovaRequisicao],
  templateUrl: './requisicoes.html',
  styleUrl: './requisicoes.css',
})
export class Requisicoes {
  private novaRequisicaoService = inject(NovaRequisicaoService);
  private requisicaoService = inject(RequisicaoService);
  private authService = inject(AuthService);

  usuarioLogado: Usuario | null = this.authService.obterUsuarioLogado();
  requisicoes = this.requisicaoService.listaRequisicoes;

  modalAtivo: boolean = false;

  GerarStatus(status: number) {
    switch (status) {
      case 0:
        return "Pendente";
        break;
      case 1:
        return "Processando";
        break;
      case 2:
        return "Aprovado";
        break;
      case 3:
        return "Recusado";
        break;
      default:
        return "Pendente"

    }
  }

  AtivarModal() {
    this.novaRequisicaoService.mostrar();
  }
}
