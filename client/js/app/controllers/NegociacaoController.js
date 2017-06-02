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
        
        let data = DateHelper.textoParaData(this._inputData.value)
        
        // Criando negociação
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        )   
        
        console.log(negociacao);
        console.log(DateHelper.dataParaTexto(negociacao.data));

    }
    
}
