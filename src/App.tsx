import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

interface Position {
  x: number;
  y: number;
}

interface GameState {
  snake: Position[];
  food: Position;
  direction: Position;
  nextDirection: Position;
  gameOver: boolean;
  score: number;
  isPaused: boolean;
}

const GRID_SIZE = 20;
const CELL_SIZE = 20;

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    snake: [{ x: 10, y: 10 }],
    food: { x: 15, y: 15 },
    direction: { x: 1, y: 0 },
    nextDirection: { x: 1, y: 0 },
    gameOver: false,
    score: 0,
    isPaused: false,
  });

  // Generate random food position
  const generateFood = useCallback((): Position => {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  }, []);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState.gameOver) return;

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          setGameState((prev) => ({
            ...prev,
            nextDirection: prev.direction.y === 0 ? { x: 0, y: -1 } : prev.nextDirection,
          }));
          break;
        case 'ArrowDown':
          e.preventDefault();
          setGameState((prev) => ({
            ...prev,
            nextDirection: prev.direction.y === 0 ? { x: 0, y: 1 } : prev.nextDirection,
          }));
          break;
        case 'ArrowLeft':
          e.preventDefault();
          setGameState((prev) => ({
            ...prev,
            nextDirection: prev.direction.x === 0 ? { x: -1, y: 0 } : prev.nextDirection,
          }));
          break;
        case 'ArrowRight':
          e.preventDefault();
          setGameState((prev) => ({
            ...prev,
            nextDirection: prev.direction.x === 0 ? { x: 1, y: 0 } : prev.nextDirection,
          }));
          break;
        case ' ':
          e.preventDefault();
          setGameState((prev) => ({
            ...prev,
            isPaused: !prev.isPaused,
          }));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState.gameOver]);

  // Game loop
  useEffect(() => {
    if (gameState.gameOver || gameState.isPaused) return;

    const interval = setInterval(() => {
      setGameState((prev) => {
        const newDirection = prev.nextDirection;
        const head = prev.snake[0];
        const newHead = {
          x: head.x + newDirection.x,
          y: head.y + newDirection.y,
        };

        // Check wall collision
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          return { ...prev, gameOver: true };
        }

        // Check self collision
        if (prev.snake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
          return { ...prev, gameOver: true };
        }

        let newSnake = [newHead, ...prev.snake];
        let newFood = prev.food;
        let newScore = prev.score;

        // Check food collision
        if (newHead.x === prev.food.x && newHead.y === prev.food.y) {
          newFood = generateFood();
          newScore += 10;
        } else {
          newSnake = newSnake.slice(0, -1);
        }

        return {
          ...prev,
          snake: newSnake,
          food: newFood,
          direction: newDirection,
          score: newScore,
        };
      });
    }, 100);

    return () => clearInterval(interval);
  }, [gameState.gameOver, gameState.isPaused, generateFood]);

  const resetGame = () => {
    setGameState({
      snake: [{ x: 10, y: 10 }],
      food: generateFood(),
      direction: { x: 1, y: 0 },
      nextDirection: { x: 1, y: 0 },
      gameOver: false,
      score: 0,
      isPaused: false,
    });
  };

  return (
    <div className="container">
      <h1>Snake Game</h1>
      
      <div className="game-info">
        <div className="score">Score: {gameState.score}</div>
        <div className="status">
          {gameState.gameOver ? 'Game Over!' : gameState.isPaused ? 'Paused' : 'Playing'}
        </div>
      </div>

      <div
        className="game-board"
        style={{
          width: GRID_SIZE * CELL_SIZE,
          height: GRID_SIZE * CELL_SIZE,
        }}
      >
        {/* Render snake */}
        {gameState.snake.map((segment, index) => (
          <div
            key={`snake-${index}`}
            className={`cell snake ${index === 0 ? 'head' : 'body'}`}
            style={{
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
              width: CELL_SIZE,
              height: CELL_SIZE,
            }}
          />
        ))}

        {/* Render food */}
        <div
          className="cell food"
          style={{
            left: gameState.food.x * CELL_SIZE,
            top: gameState.food.y * CELL_SIZE,
            width: CELL_SIZE,
            height: CELL_SIZE,
          }}
        />
      </div>

      <div className="controls">
        <button onClick={resetGame} className="btn btn-primary">
          {gameState.gameOver ? 'Restart Game' : 'New Game'}
        </button>
        <button
          onClick={() => setGameState((prev) => ({ ...prev, isPaused: !prev.isPaused }))}
          className="btn btn-secondary"
          disabled={gameState.gameOver}
        >
          {gameState.isPaused ? 'Resume' : 'Pause'}
        </button>
      </div>

      <div className="instructions">
        <p><strong>Controls:</strong></p>
        <ul>
          <li>Arrow Keys: Move snake</li>
          <li>Space: Pause/Resume</li>
          <li>Click buttons or press keys to play</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
