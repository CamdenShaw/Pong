import { SVG_NS, KEYS, paddleHeight, paddleWidth, gapSize, gameWidth, gameHeight } from '../settings';
import Board from './board';
import Paddle from './paddle';
import Ball from './ball';
import Score from './score';

export default class Game {

	constructor(element) {
	
		this.gameElement = document.getElementById(element);

		this.board = new Board(gameWidth, gameHeight);

		this.paddle1 = new Paddle(paddleWidth, paddleHeight, gapSize, (gameHeight-paddleHeight)/2, KEYS.a, KEYS.z);
		this.paddle2 = new Paddle(paddleWidth, paddleHeight, gameWidth - paddleWidth - gapSize, (gameHeight-paddleHeight)/2, KEYS.up, KEYS.down);

		this.ball = new Ball(8);
		this.score1 = new Score((gameWidth/2) - 80, 30, 30);
		this.score2 = new Score((gameWidth/2) + 40, 30, 30);
		this.balls = [];
		this.i = -1;
		this.a = 0;
		this.color = 'white';
		this.p1Color = 'red';
		this.p2Color = 'crimson';
		this.colorArray = [];

		this.win = new Audio('public/sounds/pong-04.wav');

    document.addEventListener('keydown', event => {
      switch (event.key) {
				case KEYS.x: 
						this.balls.push(new Ball((Math.random() *10) + 3));
						this.color = Math.floor(Math.random()* 1000000);
						this.colorArray.push(`#${this.color}`);
						this.i = Math.min(this.i+1, 9);
					break;
				case KEYS.right:
						this.balls.push(new Ball((Math.random() *10) + 3));
						this.color = Math.floor(Math.random()* 1000000);
						this.colorArray.push(`#${this.color}`);
						this.i = Math.min(this.i+1, 9);
        	break;
      }
    });
		document.addEventListener('keydown', event => {
			switch (event.key) {
				case KEYS.spaceBar:
					this.pause = !this.pause;
					break;
			}
		});
	}

	ballArray() {

		if (this.i >= 0 ) {

			for ( this.a = 0; this.a <= this.i; this.a++ ) {
				if (this.balls[this.a].x <= 0) {
					this.balls.splice(this.a, 1);
					this.colorArray.splice(this.a, 1);
					this.i--;
					this.ball.goal(this.paddle2);
				} else if ( this.balls[this.a].x >= gameWidth) {
					this.balls.splice(this.a, 1);
					this.colorArray.splice(this.a, 1);
					this.ball.goal(this.paddle1);
					this.i--;
				}
			}
		}

	}

	winner(player, color) {
		this.gameElement.innerHTML = '';
		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'version', '1.1');
		svg.setAttributeNS(null, 'width', gameWidth);
		svg.setAttributeNS(null, 'height', gameHeight);
		svg.setAttributeNS(null, 'viewbox', `0, 0, ${gameWidth} ${gameHeight}`);
		this.gameElement.appendChild(svg);

		let winner = document.createElementNS(SVG_NS, 'text');
		winner.setAttributeNS(null, 'x', 46);
		winner.setAttributeNS(null, 'y', gameHeight/2);
		winner.setAttributeNS(null, 'font-family', '../../public/fonts/slkscr-webfont.svg');
		winner.setAttributeNS(null, 'font-size', 44);
		winner.setAttributeNS(null, 'fill', color);
		winner.textContent = player + '  Wins!!!';
		svg.appendChild(winner);
		let newGame = document.createElementNS(SVG_NS, 'text');
		newGame.setAttributeNS(null, 'x', 37);
		newGame.setAttributeNS(null, 'y', gameHeight/1.7);
		newGame.setAttributeNS(null, 'font-family', '../../public/fonts/slkscr-webfont.svg');
		newGame.setAttributeNS(null, 'font-size', 19);
		newGame.setAttributeNS(null, 'fill', 'black');
		newGame.textContent = '(press spacebar to start a new game)';
		svg.appendChild(newGame);
		this.win.play();
		this.paddle1.score = 0;
		this.paddle2.score = 0;
		this.colorArray = [];
		this.balls = [];
		this.i = -1;
		this.a = 0;
		this.ball.reset();
		this.pause = !this.pause;
	}

	render() {
		if (this.pause) {
			return;
		}
		this.gameElement.innerHTML = '';  // clears the div so every render doesn't add the new svg to the end of the old one


		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'version', '1.1');
		svg.setAttributeNS(null, 'width', gameWidth);
		svg.setAttributeNS(null, 'height', gameHeight);
		svg.setAttributeNS(null, 'viewbox', `0, 0, ${gameWidth} ${gameHeight}`);
		this.gameElement.appendChild(svg);

		this.board.render(svg);

		this.score1.render(svg, this.paddle1.score);
		this.score2.render(svg, this.paddle2.score);
		
		if (this.paddle1.score === 20) {
			this.winner('Player 1', this.p1Color);
		} else if (this.paddle2.score === 20) {
			this.winner('Player 2', this.p2Color);
		}

		this.paddle1.render(svg);
		this.paddle2.render(svg);
		this.ball.render(svg, this.paddle1, this.paddle2);
		this.ballArray();

		for ( this.a = 0; this.a <= this.i; this.a++ ){
			if ( this.balls[this.a] != null) {
				this.balls[this.a].color = this.colorArray[this.a];
				this.balls[this.a].render(svg, this.paddle1, this.paddle2);
			} else {
				let j = 1;
			}
		}
	}
}