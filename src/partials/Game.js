import { SVG_NS, KEYS, paddleHeight, paddleWidth, gapSize, gameWidth, gameHeight } from '../settings';
import Board from './board';
import Paddle from './paddle';
import Ball from './ball';

export default class Game {

constructor(element) {
	
		this.gameElement = document.getElementById(element);

		this.board = new Board(gameWidth, gameHeight);
		this.paddle1 = new Paddle(paddleWidth, paddleHeight, gapSize, (gameHeight-paddleHeight)/2, KEYS.a, KEYS.z);
		this.paddle2 = new Paddle(paddleWidth, paddleHeight, gameWidth - paddleWidth - gapSize, (gameHeight-paddleHeight)/2, KEYS.up, KEYS.down);
		this.ball = new Ball(8);
	}

	render() {
		this.gameElement.innerHTML = '';  // clears the div so every render doesn't add the new svg to the end of the old one


		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'version', '1.1');
		svg.setAttributeNS(null, 'width', gameWidth);
		svg.setAttributeNS(null, 'height', gameHeight);
		svg.setAttributeNS(null, 'viewbox', `0, 0, ${gameWidth} ${gameHeight}`);
		this.gameElement.appendChild(svg);

		this.board.render(svg);
		this.paddle1.render(svg);
		this.paddle2.render(svg);
		this.ball.render(svg);

	}
}