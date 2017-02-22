class DateHelper {

	constructor(){
		throw new Error('Esta classe não pode ser instanciada');
	}

	static dataParaTexto(data){
		//Template string
		return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
	}

	static textoParaData(texto){
		// Expressão regular
		if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
			throw Error('Deve estar no formato aaaa-mm-dd');

		// 0.1.2.3B - Mudar ordem Documentação
		return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
	}

}