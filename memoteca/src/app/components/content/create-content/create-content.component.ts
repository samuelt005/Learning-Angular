import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent {

    pensamento: Pensamento = {
        id: 1,
        conteudo: 'Aprendendo Angular',
        autoria: 'dev',
        modelo: ''
    }

    criarPensamento() {
        alert("Novo pensamento criado!");
    }

}
