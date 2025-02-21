import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {
    path:'',
    component:DefaultComponent,
    pathMatch:'full'
  },
  //Para que cargue con lazyloading
  {
    path:'simulador',
    loadChildren:()=>import('./simulador/simulador.module').then(m=>m.SimuladorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
