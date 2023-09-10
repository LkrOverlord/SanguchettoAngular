import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'consumer',
    pathMatch: 'full'
  },
  {
    path: 'consumer',
    loadChildren: () => import('./modules/consumer/consumer.module').then(m => m.ConsumerModule)
  },
  {
    path: 'vendor',
    loadChildren: () => import('./modules/vendor/vendor.module').then(m => m.VendorModule)
  },
  // ... cualquier otra ruta que quieras añadir
  {
    path: '**',
    redirectTo: 'consumer' // Redirecciona a 'consumer' en caso de rutas no encontradas
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
