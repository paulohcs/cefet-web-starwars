// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

const API_ENDPOINT = 'https://swapi.dev/api'

/* Exercício 1 */
import { play } from './music.js';
import { decimalParaRomano } from './roman.js';
import { restartAnimation } from './restart-animation.js';

class AudioPlayer{
	constructor(audioUrl, coverImageUrl, title, artist){
		this.audioUrl = audioUrl;
		this.coverImageUrl = coverImageUrl;
		this.title = title;
		this.artist = artist;
	}
}

let audioSW = new AudioPlayer('audio/tema-sw.mp3','imgs/logo.svg','Intro','John Williams');

play(audioSW, document.body);

/* Exercício 2 */

const resposta = await fetch(API_ENDPOINT+ '/films/')
const dados = await resposta.json()
console.log(dados)
let listaFilmesEl = document.querySelector('#filmes ul');
listaFilmesEl.innerHTML = '';

/* Opcional 4 */
dados.results.sort(function(a, b){
	return a.episode_id - b.episode_id;
});

for(let filme of dados.results){
	let filmeEl = document.createElement('li');
	filmeEl.innerHTML = `Episode ${decimalParaRomano(filme.episode_id)}`.padEnd(11,' ') + ' - ' + filme.title;

	/* Exercício 3 */
	filmeEl.addEventListener('click', function(e){
		let introducaoEl = document.querySelector('.introducao-animada');
		introducaoEl.innerHTML = `Episode ${decimalParaRomano(filme.episode_id)}
		${filme.title.toUpperCase()} 
		${filme.opening_crawl}`;
		restartAnimation(introducaoEl);
	});
	listaFilmesEl.appendChild(filmeEl);
}

 