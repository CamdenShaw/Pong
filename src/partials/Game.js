import { SVG_NS, KEYS, paddleHeight, paddleWidth, gapSize, gameWidth, gameHeight } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import ScoreCard from './Winner';

export default class Game {

	constructor(element) {
	
		this.gameElement = document.getElementById(element);
		this.board = new Board(gameWidth, gameHeight);
		this.end = false;
		this.paddle1 = new Paddle(paddleWidth, paddleHeight, gapSize, (gameHeight-paddleHeight)/2, KEYS.a, KEYS.z);
		this.paddle2 = new Paddle(paddleWidth, paddleHeight, gameWidth - paddleWidth - gapSize, (gameHeight-paddleHeight)/2, KEYS.up, KEYS.down);

		this.ball = new Ball(8);
		this.score1 = new Score((gameWidth/2) - 80, 30, 30);
		this.score2 = new Score((gameWidth/2) + 40, 30, 30);
		this.balls = [];
		this.scoreCard = new ScoreCard( gameWidth, gameHeight, element );
		this.i = -1;
		this.a = 0;
		this.color = 'white';
		this.p1Color = 'red';
		this.p2Color = 'crimson';
		this.colorArray = [];

    document.addEventListener('keydown', event => {
      switch (event.key) {
				case KEYS.x: 'balls',
						this.colourfulBalls();
						break;
				case KEYS.right: 'balls',
						this.colourfulBalls();
						break;
      }
		});

		document.addEventListener('keydown', event => {
			switch (event.key) {
				case KEYS.spaceBar:
						this.resume();
						break;
			}
		});
	}

	resume() {
		this.pause = !this.pause;
		if (this.end === true) {
			this.end = false;
			this.pause = !this.pause;
		}
	}

	colourfulBalls() {
		this.balls.push(new Ball((Math.random() *10) + 3));
		this.color = Math.floor(Math.random()* 1000000);
		this.colorArray.push(`#${this.color}`);
		this.i = Math.min(this.i+1, 9);
	}

	ballArray() {
		if (this.i >= 0 ) {
			for ( this.a = 0; this.a <= this.i; this.a++ ) {
				if (this.balls[this.a].x <= 0) {
					this.balls.splice(this.a, 1);
					this.colorArray.splice(this.a, 1);
					this.i--;
					this.ball.goal(this.paddle2);
				}
				else if ( this.balls[this.a].x >= gameWidth) {
					this.balls.splice(this.a, 1);
					this.colorArray.splice(this.a, 1);
					this.ball.goal(this.paddle1);
					this.i--;
				}
			}
		}
	}

	winner() {
		this.paddle1.score = 0;
		this.paddle2.score = 0;
		this.colorArray = [];
		this.i = -1;
		this.a = 0;
		this.ball.reset();
		this.end = true;
		this.balls = [];
	}

	render() {
		if (this.pause) {
			return;
		}
		if (this.end) {
			this.winner();
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
			this.gameElement.innerHTML = '';
			this.scoreCard.render('Player 1', this.p1Color);
			this.winner();
		} else if (this.paddle2.score === 20) {
			this.gameElement.innerHTML = '';
			this.scoreCard.render('Player 2', this.p2Color);
			this.winner();
		}

		this.paddle1.render(svg);
		this.paddle2.render(svg);
		this.ball.render(svg, this.paddle1, this.paddle2);
		this.ballArray();

		for ( this.a = 0; this.a <= this.i; this.a++ ){
			this.balls[this.a].color = this.colorArray[this.a];
			this.balls[this.a].render(svg, this.paddle1, this.paddle2);
		}
	}
}