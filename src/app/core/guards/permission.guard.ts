import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserEnum } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class PermissionGuard implements CanActivate {
    constructor(private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // should be the token
        const user = this.authService.getAuthenticatedUser();
        if (user.role !== UserEnum.ADMIN) {
            this.authService.redirectToNotAuthorizedPage();
        }

        return user.role === UserEnum.ADMIN;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(route, state);
    }
}