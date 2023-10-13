import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent {

    constructor(
        private service: PensamentoService,
        private router: Router
        ) {

    }

    pensamento: Pensamento = {
        conteudo: '',
        autoria: '',
        modelo: ''
    }

    criarPensamento() {
        this.service.create(this.pensamento).subscribe(() => {
            this.router.navigate(['/listarPensamento'])
        });
    }

}
