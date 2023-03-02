import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router'
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivationGuardService implements CanDeactivate<DashboardComponent> {

  constructor() { }

  canDeactivate(component: DashboardComponent): boolean{
    return confirm("Do you want to logout?");
  }
}
