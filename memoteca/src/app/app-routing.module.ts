import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateContentComponent } from './components/content/create-content/create-content.component';
import { ListContentComponent } from './components/content/list-content/list-content.component';
import { DeleteContentComponent } from './components/content/delete-content/delete-content.component';
import { EditContentComponent } from './components/content/edit-content/edit-content.component';

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
    {
        path: 'pensamentos/excluirPensamento/:id',
        component: DeleteContentComponent
    },
    {
        path: 'pensamentos/editarPensamento/:id',
        component: EditContentComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
