import {View} from'./View';

// extends - Herança
export class MensagemView extends View {

    constructor(elemento){
        super(elemento);
    }

    template(model){
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }

}