import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { LoadingService } from '../../services/loading/loading-service';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.html',
  styleUrl: './loading.css',
})

/**
 * Componente de Loading
 * 
 * O componente de loading faz uso do LoadingService para saber
 * o valor da variável mostrarLoading. Essa variável é usada
 * em um if dentro do html.
 */

export class Loading {

  // Injeções
  private loadingService = inject(LoadingService);

  // Atributos
  mostrarLoading = this.loadingService.ativado;
}
