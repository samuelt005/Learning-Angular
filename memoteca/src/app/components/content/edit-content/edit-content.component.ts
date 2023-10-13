import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.css']
})
export class EditContentComponent {

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
        const id = this.route.snapshot.paramMap.get('id');
        this.service.findById(parseInt(id!)).subscribe((pensamento) => {
            this.pensamento = pensamento;
        })
    }

    editarPensamento() {
        this.service.edit(this.pensamento).subscribe(() => {
            this.router.navigate(['/listarPensamento']);
        })
    }
}
