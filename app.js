var linguagemProgramacao = document.querySelector('input#progLang')
var btn = document.querySelector('button#btn')
var res = document.querySelector('div.respostas')
var user = document.querySelector('div#username')
let valores = []

var name = function() {
	var nome = window.prompt('Olá, qual seu nome?')
		return nome
}()
validacao()
user.textContent = name

function validacao() {
	if (name.length === 0) {
		name = window.prompt('Por favor, insira um nome')
		validacao()
	}
}

btn.addEventListener('click', adicionar)

function adicionar() {
		let valor = linguagemProgramacao.value
		validacaoPresente(valor)
}

function validacaoPresente(x) {
	if (valores.indexOf(x) != -1) {
			alert('Valor já adicionado!')
			reinicializacao()
		} else if (x.length === 0) {
			alert('Por favor, adicione uma linguagem de programação')
			reinicializacao()
		} else {
			valores.push(x)
			criacao(x)
		}
}

function criacao(y) {
	let divNova = document.createElement('div')
	divNova.setAttribute('class', 'linguagens')
	divNova.textContent = `${y}`
	res.appendChild(divNova) 
	reinicializacao()
}

function reinicializacao() {
	linguagemProgramacao.focus() 
	linguagemProgramacao.value = ''
}