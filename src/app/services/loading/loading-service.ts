import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  ativado = signal<boolean>(false);

  public esconder() {
    setTimeout( () => {
      this.ativado.set(false);
    }, 3000);
  }

  public mostrar() {
    this.ativado.set(true);
  }
}
