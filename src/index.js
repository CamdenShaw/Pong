import './styles/game.css';
import Game from './partials/Game'

const game = new Game('game');

(function gameLoop() {
    game.render();
    requestAnimationFrame(gameLoop);
})();
