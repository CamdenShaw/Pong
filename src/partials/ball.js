import { SVG_NS, gameHeight, gameWidth } from '../settings.js';

export default class Ball {
  constructor(radius) {
    this.radius = radius;
    this.direction = 1;
    this.vx=0;
    this.vy=0;
    this.vy = Math.random()*10 - 5;
    while ( this.vy === 0 ) {
      this.vy = Math.random()*10 -5;
    }
    this.vx = this.direction *((6 - Math.abs(this.vy))*(Math.random()*2-1));
    while ( this.vx === 0 ){
      this.vx = this.direction *((6 - Math.abs(this.vy))*(Math.random()*2-1));
    }
    this.xVector = gameWidth/2;
    this.yVector = gameHeight/2;
  }


  bounce() {
    if (this.yVector <= this.radius || this.yVector >= (gameHeight-this.radius)) {
          this.vy = this.vy * -1;
    }
    if (this.xVector <=this.radius || this.xVector >= (gameWidth - this.radius)) {
          this.vx = this.vx * -1;
    }
  }

  render(svg) {
    this.xVector += this.vx;
    this.yVector += this.vy;
    let ball = document.createElementNS(SVG_NS, 'circle');
    ball.setAttributeNS(null, 'r', this.radius);
    ball.setAttributeNS(null, 'cx', this.xVector);
    ball.setAttributeNS(null, 'cy', this.yVector);
    ball.setAttributeNS(null, 'fill', 'white');
    svg.appendChild(ball);
    this.bounce();
  }

  reset() {
    let ball = document.createElementNS(SVG_NS, 'circle');
    ball.setAttributeNS(null, 'cx', gameWidth/2);
    ball.setAttributeNS(null, 'cy', gameHeight/2)
  }
}