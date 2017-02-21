// 0.1 
class Negociacao {
	// 0.1.2 
	constructor(data, quantidade, valor){
		// 0.1.2.3A 
		this._data = new Date(data.getTime());
		// 0.1.2.3B
		this._quantidade = quantidade;
		// 0.1.2.3C 
		this._valor = valor;
		// 0.1.2.3D

	}

	//0.2A
	get volume(){
	//0.2B
		return this._quantidade * this._valor;
	}
	
	get data(){
		return this._data;
	}

	get quantidade(){
		return this._quantidade;
	}

	get valor(){
		return this._valor;
	}
}