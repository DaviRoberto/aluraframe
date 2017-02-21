// 0.1 
class NegociacaoController{

// 0.1.2 - TODO: Escrever documentação
	constructor(){
		
		// 0.1.2A
	 	let $ = document.querySelector.bind(document);

	 	// 0.1.2B
	 	this._inputData = $('#data');
	 	this._inputQuantidade = $('#quantidade');
	 	// 0.1.2C 
	 	this._inputValor = $('#valor');
		
	}
		
	// 0.1.2.3
	adiciona(event){

		// 0.1.2.3A
	 	event.preventDefault();
	 	// 0.1.2.3B
	 	let data = new Date(
 		...this._inputData.value
 			.split('-')
 			.map((item, indice) => item - indice % 2)
 	);
 	// 0.1.2.3C
 	let negociacao = new Negociacao(
 		// 0.1.2.3D
 		data,
 		this._inputQuantidade.value,
 		this._inputValor.value
	);

 		console.log(negociacao);
	}
}