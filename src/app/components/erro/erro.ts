import { Component, inject, Input } from '@angular/core';
import { ErroService } from '../../services/erro/erro';

@Component({
  selector: 'app-erro',
  imports: [],
  templateUrl: './erro.html',
  styleUrl: './erro.css',
})

/**
 * Componente de Erro
 * 
 * O componente de erro faz uso do ErroService para saber
 * o valor da variável mostrarErro. Essa variável é usada
 * em um if dentro do html.
 */

export class Erro {

  // Inputs
  @Input() mensagem: string = '';
  
  // Injeções
  private erroService = inject(ErroService);

  // Atributos
  mostrarErro = this.erroService.ativado;
}
