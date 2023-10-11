import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateContentComponent } from './components/content/create-content/create-content.component';
import { ListContentComponent } from './components/content/list-content/list-content.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'listarPensamento',
        pathMatch: 'full'
    },
    {
        path: 'criarPensamento',
        component: CreateContentComponent
    },
    {
        path: 'listarPensamento',
        component: ListContentComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
