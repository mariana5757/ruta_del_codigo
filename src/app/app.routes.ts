import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/pages/index/index.component').then(m => m.IndexComponent)
  },
  {
    path: 'trainee',
    loadComponent: () =>
      import('./components/pages/trainee/trainee.component').then(m => m.TraineeComponent)
  }
];
