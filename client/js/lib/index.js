// Fazendo uma lista com todos os campos da páginas para percorrer 1 a 1
var campos =[
	//document.querySelector  - API do DOM que busca um elementoi do DOM usando seletor CSS
	document.querySelector('#data'),
	document.querySelector('#quantidade'),
	document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

// document.querySelector('.form').addEventListener('submit'); - Adicionando um evento do tipo submit na classe .form
document.querySelector('.form').addEventListener('submit', function(event){
	// event.preventDefault(); - Não submeter o formulário
	event.preventDefault();

	// document.createElement(); - Criando um elemento no DOM
	// var tr = document.createElement('tr'); - Cada vez que adicionar valores ao form, adiciona uma nova tr
	var tr = document.createElement('tr');
	// Para cara item que varrer do array, vai chamar a function 
	campos.forEach(function(campo){
		var td = document.createElement('td');
		td.textContent = campo.value;
		tr.appendChild(td);
	});

	var tdVolume = document.createElement('td');
	tdVolume.textContent = campos[1].value * campos[2].value;

	tr.appendChild(tdVolume);

	tbody.appendChild(tr);

	campos[0].value = '';
	campos[1].value = 1;
	campos[2].value = 1;

	campos[0].focus();

});