import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    //dejar la ruta bacia para que inicie.. 
    path: '',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
     
  },
 
];

@NgModule({
  declarations: [],
  imports: [ 
    [RouterModule.forRoot(routes)],
  ],
  exports: [RouterModule] //exporta todos los modulos agregados
})
export class AppRoutingModule { }
