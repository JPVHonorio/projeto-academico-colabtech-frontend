import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // Atributos
  private TOKEN_KEY = 'acesso';

  // Construtor
  constructor() { }

  public armazenarUsuarioLogado(token: Usuario): void {
    sessionStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
  }

  public obterUsuarioLogado(): Usuario | null {
    var jsonString = sessionStorage.getItem(this.TOKEN_KEY);
    return JSON.parse(jsonString || '{}');
  }

  public removerUsuarioLogado(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
  }
}
