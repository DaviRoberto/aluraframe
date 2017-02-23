//Model para encapsular uma lista de negociações
class ListaNegociacoes{

	constructor(){
		this._negociacoes = [];
	}

	adiciona(negociacao){
		this._negociacoes.push(negociacao);
	}

	get negociacoes(){
		// Retorna uma cópia da lista que tenho. Programação defencisa para evitar que alguém faça alteração na lista. 
		return [].concat(this._negociacoes);
	}  

}