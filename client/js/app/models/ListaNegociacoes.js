class ListaNegociacoes{
    constructor(armadilha){

        this._negociacoes = [];
        this._armadilha = armadilha;
    }

    adiciona(negociacao){
         this._negociacoes.push(negociacao);        
    }

    get negociacoes(){
        // [].concat(this._negociacoes) - programação defensiva, estou criando uma cópia caso alguém rode um script para alterar minha negociação quando estiver sendo criada, irá alterar a cópia, não a original. 
        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes = [];
        
    }

}