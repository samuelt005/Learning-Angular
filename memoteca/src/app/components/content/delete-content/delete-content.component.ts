import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-content',
  templateUrl: './delete-content.component.html',
  styleUrls: ['./delete-content.component.css']
})
export class DeleteContentComponent {
    pensamento: Pensamento = {
        id: 0,
        conteudo: '',
        autoria: '',
        modelo: ''
    }

    constructor(
        private service: PensamentoService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id')
        this.service.findById(parseInt(id!)).subscribe((pensamento) => {
            this.pensamento = pensamento;
        })
    }

    excluirPensamento() {
        if(this.pensamento.id) {
            this.service.delete(this.pensamento.id).subscribe(() => {
                this.router.navigate(['/listarPensamento']);
            })
        }
    }

    cancelar() {
        this.router.navigate(['/listarPensamento']);
    }
}
