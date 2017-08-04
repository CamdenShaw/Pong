import { SVG_NS } from '../settings';

export default class Score {

  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  render(svg, score) {
    let scoreBoard = document.createElementNS(SVG_NS, 'text');
    scoreBoard.setAttributeNS(null, 'x', this.x);
    scoreBoard.setAttributeNS(null, 'y', this.y);
    scoreBoard.setAttributeNS(null, 'font-family', 'impact');
    scoreBoard.setAttributeNS(null, 'font-size', this.size);
    scoreBoard.setAttributeNS(null, 'fill', 'whitesmoke');
    scoreBoard.textContent = score;
    svg.appendChild(scoreBoard);
  }
}
