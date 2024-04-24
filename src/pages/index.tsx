import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [turnColor, setTurnColor] = useState(1);
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);

    if (board[y + 1] !== undefined && board[y + 1][x] === 3 - turnColor) {
      setTurnColor(3 - turnColor);
      newBoard[y][x] = turnColor;
    } else if (board[y + 2] !== undefined && board[y + 2][x] === 3 - turnColor) {
      setTurnColor(3 - turnColor);
      newBoard[y][x] = turnColor;
    } else if (board[y + 3] !== undefined && board[y + 3][x] === 3 - turnColor) {
      setTurnColor(3 - turnColor);
      newBoard[y][x] = turnColor;
    } else if (board[y + 4] !== undefined && board[y + 4][x] === 3 - turnColor) {
      setTurnColor(3 - turnColor);
      newBoard[y][x] = turnColor;
    } else if (board[y + 5] !== undefined && board[y + 5][x] === 3 - turnColor) {
      setTurnColor(3 - turnColor);
      newBoard[y][x] = turnColor;
    } else if (board[y + 6] !== undefined && board[y + 6][x] === 3 - turnColor) {
      setTurnColor(3 - turnColor);
      newBoard[y][x] = turnColor;
    } else if (board[y + 7] !== undefined && board[y + 7][x] === 3 - turnColor) {
      setTurnColor(3 - turnColor);
      newBoard[y][x] = turnColor;
    }

    setBoard(newBoard);
  };
  return (
    <div className={styles.container}>
      <div className={styles.boardStyle}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cellStyle} key={`${x}-${y}`} onClick={() => clickHandler(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stoneStyle}
                  style={{ background: color === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Home;
