import { SVG_NS } from '../settings';

export default class ScoreCard {

  constructor (width, height, element) {
    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById(element);
    this.win = new Audio('public/sounds/pong-04.wav');
  }

  render(player, color) {
		this.win.play();

    let svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttributeNS(null, 'version', '1.1');
    svg.setAttributeNS(null, 'width', this.width);
    svg.setAttributeNS(null, 'height', this.height);
    svg.setAttributeNS(null, 'viewbox', `0, 0, ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg);

    let winner = document.createElementNS(SVG_NS, 'text');
    winner.setAttributeNS(null, 'x', 46);
    winner.setAttributeNS(null, 'y', this.height/2);
    winner.setAttributeNS(null, 'font-family', '../../public/fonts/slkscr-webfont.svg');
    winner.setAttributeNS(null, 'font-size', 44);
    winner.setAttributeNS(null, 'fill', color);
    winner.textContent = player + '  Wins!!!';
    svg.appendChild(winner);

    let newGame = document.createElementNS(SVG_NS, 'text');
    newGame.setAttributeNS(null, 'x', 37);
    newGame.setAttributeNS(null, 'y', this.height/1.7);
    newGame.setAttributeNS(null, 'font-family', '../../public/fonts/slkscr-webfont.svg');
    newGame.setAttributeNS(null, 'font-size', 19);
    newGame.setAttributeNS(null, 'fill', 'black');
    newGame.textContent = '(press spacebar to start a new game)';
    svg.appendChild(newGame);
  }
}