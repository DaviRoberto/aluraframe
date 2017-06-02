class DateHelper{

    constructor(){
        throw new Error('Esta classe não pode ser instanciada');
    }

    static dataParaTexto(data){    
        
        return data.getDate()
        + '/' + (data.getMonth() + 1)                     
        + '/' + data.getFullYear(); 
        
    }      
    
    static textoParaData(texto){
        // ... - spread operator ecmascript 6, desmembra o array da forma: 1º item do array é o 1º parametro do construtor do date;  2º item do array é o 2º parametro do construtor do date; e assim em diante. 
        return new Date (...texto.split('-').map((item, indice) => item - indice % 2));
    }
    
}