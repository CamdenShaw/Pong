import { SVG_NS, gameHeight, gameWidth } from '../settings.js';

export default class Ball {
  constructor(radius) {
    this.radius = radius;
    this.direction = 0;
    this.pingW = new Audio('public/sounds/pong-01.wav');
    this.pingP = new Audio('public/sounds/pong-03.wav');
    this.pingS = new Audio('public/sounds/pong-02.wav');
    while (this.direction === 0) {
      this.direction = Math.floor(Math.random()*2-0.49);
    }
    this.reset();
  }

  wallBounce() {

    if (this.y <= this.radius || this.y >= (gameHeight-this.radius)) {
      this.vy = -this.vy;
      this.pingW.play();
    }
    
  }

  paddleBounce(paddle1, paddle2) {
    if (this.vx > 0) {
      let paddle = paddle2.coordinates(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
      let [leftX, rightX, topY, bottomY] = paddle;
      let ballPosX = this.x + this.radius;
      let ballPosBottom = this.y + this.radius;
      let ballPosTop = this.y - this.radius;

      if (ballPosX >= leftX && ballPosX <= (rightX + this.vx + this.radius) && ballPosTop <= bottomY && ballPosBottom >= topY) {
        this.vx = -this.vx;
        this.pingP.play();
      }
    } else {
      
      let paddle = paddle1.coordinates(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
      let [leftX, rightX, topY, bottomY] = paddle;
      let ballPosX = this.x - this.radius;
      let ballPosBottom = this.y + this.radius;
      let ballPosTop = this.y - this.radius;

      if (ballPosX <= rightX && ballPosX >= (leftX - this.vx - this.radius) &&  ballPosTop <= bottomY && ballPosBottom >= topY) {
        this.vx = -this.vx;
        this.pingP.play();
      }
    }
  }

  goal (player) {
    player.score++;
    this.pingS.play();
    this.reset();
  }

  render(svg, paddle1, paddle2) {

    if (this.x >= gameWidth) {
      this.direction = 1;
      this.goal(paddle1);
    } else if (this.x <= 0) {
      this.direction = -1;
      this.goal(paddle2);
    }

    this.x += this.vx;
    this.y += this.vy;
    let ball = document.createElementNS(SVG_NS, 'circle');
    ball.setAttributeNS(null, 'r', this.radius);
    ball.setAttributeNS(null, 'cx', this.x);
    ball.setAttributeNS(null, 'cy', this.y);
    ball.setAttributeNS(null, 'fill', 'white');
    svg.appendChild(ball);
    this.wallBounce();
    this.paddleBounce(paddle1, paddle2);
  }

  reset() {
    this.x = gameWidth/2;
    this.y = gameHeight/2;
    this.vx=0;
    this.vy=0;
    while ( this.vy === 0 ) {
      this.vy = Math.floor(Math.random()*10 - 5);
    }
    while ( this.vx === 0 ){
      this.vx = this.direction *Math.floor(6 - Math.abs(this.vy));
    }
  }
}