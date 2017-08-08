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
		this.color = 'white';
		this.colorArray = [];

    document.addEventListener('keydown', event => {
      switch (event.key) {
				case KEYS.x: 

						this.balls.push(new Ball((Math.random() *10) + 3));
						this.color = Math.floor(Math.random()* 1000000);
						this.colorArray.push(`#${this.color}`);
						this.i = Math.min(this.i+1, 10);
						// console.log(this.balls[this.i]);
						// console.log('success', this.balls, this.i);
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
				if ( this.balls[this.a] != null) {
					if (this.balls[this.a].x+this.balls[this.a].radius <= 5) {
						this.balls.splice(this.a, this.a);
						this.ball.goal(this.paddle1);
						console.log(this.i, this.balls);
					} else if ( this.balls[this.a].x-this.balls[this.a].radius >= gameWidth -5) {
						this.balls.splice(this.a, this.a);
						console.log(this.i, this.balls);
						this.ball.goal(this.paddle2);
					}
				} else {
						let i = 1;
					}
			}
		}

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

		this.paddle1.render(svg);
		this.paddle2.render(svg);
		this.ball.render(svg, this.paddle1, this.paddle2);
		this.ballArray();

		for ( this.a = 0; this.a <= this.i; this.a++ ){
			if ( this.balls[this.a] != null) {
				this.balls[this.a].color = this.colorArray[this.a];
				this.balls[this.a].render(svg, this.paddle1, this.paddle2);
		
			}
		}
	}
}