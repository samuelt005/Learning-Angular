import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

    @Input() pensamento: Pensamento = {
        id: 0,
        conteudo: '',
        autoria: '',
        modelo: '',
    }

    cardWidth(): string {
        if(this.pensamento.conteudo.length >= 256) {
            return 'pensamento-g'
        } else {
            return 'pensamento-p'
        }
    }

}
