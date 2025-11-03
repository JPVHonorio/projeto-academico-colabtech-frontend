import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErroService {
  ativado = signal<boolean>(false);

  public esconder() {
      this.ativado.set(false);
  }

  public mostrar() {
    this.ativado.set(true);
  }
}
