import { CanActivate, Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(): Observable<boolean> {
        return of(false); //aqui diz que não está logado, o certo é fazer uma lógica para ler o cookie de autenticação
        //https://jasonwatmore.com/post/2019/06/22/angular-8-jwt-authentication-example-tutorial

        //Se não estiver logado envia para a página de login:
        //this.router.navigate(['/login']);

        // Opcionalmente pode verificar no localstorage
        //   if (localStorage.getItem('currentUser')) {
        //     // logged in so return true
        //     return true;
        // }

        // Se quiser pegar o endereço de redirecionamento:
        // // not logged in so redirect to login page with the return url
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        // return false;
    }
}