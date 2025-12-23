# Snake Game

A classic Snake game utilizing React, TypeScript, Node, and Vite. Written with Claude (AI). This is the initial test.

## Features

- ✨ Smooth snake movement and controls
- 🎮 Arrow keys for movement, Space to pause/resume
- 📊 Real-time score tracking
- 🎯 Collision detection (walls and self)
- 🍎 Random food generation
- 📱 Responsive design - works on desktop and mobile
- ⚡ Built with Vite for fast development

## Getting Started

### Prerequisites

- a modern web browser
- Node.js 
- npm

### Installation

1. Download the code

#### Option 1 - immediate play:

2. Open the standalone.html file in the dist folder to play the game immediately.

#### Option 2 - further development:

2. Open the project folder in an IDE of your choice.
3. Make changes as you see fit.
4. Start the Vite development server via:
```bash
npm run dev
```
5. Open your browser and navigate to `http://localhost:3000`

## How to Play

- **Arrow Keys**: Move the snake (Up, Down, Left, Right)
- **Space**: Pause/Resume the game
- **Buttons**: Click "New Game" to restart or "Pause/Resume" to toggle pause
- Eat the red food to grow and earn points
- Avoid hitting walls and yourself
- Try to get the highest score!

## Building for Production

Build the optimized version:
```bash
npm run build
```

Preview the build:
```bash
npm run preview
```

## Game Rules

1. The snake starts at the center of the board
2. Each food eaten increases the score by 10 points
3. The game ends if the snake hits a wall or itself
4. The game can be paused at any time (except when game over)
5. A new game can be started at any time

## Technologies Used

- **React** 
- **TypeScript** 
- **npm** 
- **Vite** 
- **CSS** 

## Project Structure

```
src/
├── main.tsx       # Application entry point
├── App.tsx        # Main game component
├── App.css        # Game styles
└── index.css      # Global styles
```

## Game Design

The game board is a 20x20 grid where:
- The snake is represented by green blocks
- The head has a glow effect
- The food is a red circle 
- The game updates every 100ms for smooth gameplay
