// Obtendo valores para criar uma negociação de acordo com as regras de negócio da model 'Negociacao.js'
class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');        
    }

    adiciona(event){
        event.preventDefault();

        // console.log(typeof(this._inputData.value));

        let data = new Date(this._inputData.value.replace(/-/g, ','));
       
        console.log(data);

        // TODO: Adicionar negociação em uma lista
    }
}