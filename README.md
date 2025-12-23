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

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

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

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **CSS3** - Styling and animations

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
- The head is a brighter green with glow
- The food is a red circle with pulse animation
- The game updates every 100ms for smooth gameplay

## License

This project is open source and available under the MIT License.
