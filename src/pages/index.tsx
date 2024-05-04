import { useState } from 'react';
import styles from './index.module.css';

const directions = [
  [0, 1],
  [-1, 1],
  [-1, 0],
  [-1, -1],
  [0, -1],
  [1, -1],
  [1, 0],
  [1, 1],
];

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

  let blackPoint = 0;
  let whitePoint = 0;
  for (let y = 0; y <= 7; y++) {
    for (let x = 0; x <= 7; x++) {
      const color = board[y][x];

      if (color === 1) {
        blackPoint++;
      } else if (color === 2) {
        whitePoint++;
      }
    }
  }

  // let y = 0; y <= 7; y++

  const clickHandler = (x: number, y: number) => {
    const newBoard = structuredClone(board);

    if (board[y][x] !== 0) return;

    for (const [dy, dx] of directions) {
      // let nx = x + dx;
      // let ny = y + dy;
      let findOpponent: boolean = false;
      let i = 0;

      if (y + dy * i !== undefined && x + dx * i !== undefined) {
        while (
          i < 8 &&
          y + dy * i >= 0 &&
          y + dy * i < board.length &&
          x + dx * i >= 0 &&
          x + dx * i < board[0].length
        ) {
          i++;
          if (board[y + dy * i] === undefined || board[y + dy * i][x + dx * i] === undefined) {
            break;
          }

          const stone = board[y + dy * i][x + dx * i];

          if (stone === 0) break;
          if (stone === 3 - turnColor) {
            findOpponent = true;
            continue;
          }
          if (stone === turnColor) {
            if (findOpponent) {
              newBoard[y][x] = turnColor;
              for (let a = 0; a <= i; a++) {
                newBoard[y + dy * a][x + dx * a] = turnColor;
              }
              setTurnColor(3 - turnColor);
              break;
            } else {
              break;
            }
          }
        }
      }
    }

    //（whileの中） i < 8 && y + dy * i <= board.length && x + dx * i <= board.length

    // if (board[y + 1] !== undefined && board[y + 1][x] === 3 - turnColor) {
    //   for (let n = 1; y + n < board.length; n++) {
    //     console.log(n);
    //     if (board[y + n] !== undefined && board[y + n][x] === turnColor) {
    //       while (n > 0) {
    //         newBoard[y + n][x] = turnColor;
    //         n--;
    //       }
    //       break;
    //     }
    //   }

    //   newBoard[y][x] = turnColor;
    //   console.log(newBoard);
    //   setBoard(newBoard);
    //   setTurnColor(3 - turnColor);
    // }

    // if (board[y + 1] !== undefined && board[y + 1][x] === 3 - turnColor) {
    // //   if (board[y + 2] !== undefined && board[y + 2][x] === turnColor) {
    //     // newBoard[y][x] = turnColor;
    //     // setTurnColor(3 - turnColor);
    // //   }
    // }

    setBoard(newBoard);
  };

  return (
    <div className={styles.container}>
      <div className={styles.point}>
        黒：{blackPoint}個
        <br />
        白：{whitePoint}個
      </div>
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
      <div className={styles.player}>
        {turnColor === 1 ? '黒' : '白'}
        のターンです
      </div>
    </div>
  );
};

export default Home;
