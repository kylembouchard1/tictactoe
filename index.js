let currentPlayer = 'X';
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function makeMove(row, col) {
  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
    document.getElementById(`cell-${row}-${col}`).innerText = currentPlayer;
    checkWinner();
    togglePlayer();
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.getElementById('turn').innerText = `${currentPlayer}'s Turn`;
}

function restartGame() {
  currentPlayer = 'X';
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  document.getElementById('turn').innerText = `${currentPlayer}'s Turn`;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      document.getElementById(`cell-${i}-${j}`).innerText = '';
    }
  }
  $('.alert').alert('close');
}

function checkWinner() {
    const winningConditions = [
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]]
    ];
  
    for (let condition of winningConditions) {
      const [a, b, c] = condition;
      const [row1, col1] = a;
      const [row2, col2] = b;
      const [row3, col3] = c;
  
      console.log(board[row1][col1], board[row2][col2], board[row3][col3]);
  
     
      if (
        board[row1][col1] !== '' &&
        board[row1][col1] === board[row2][col2] &&
        board[row1][col1] === board[row3][col3]
      ) {
        showWinner(board[row1][col1]);
        return;
      }
    }
  
    
    if (board.every(row => row.every(cell => cell !== ''))) {
      showWinner('draw');
    }
  }
  function showWinner(winner) {
    let message;
    if (winner === 'draw') {
      message = "It's a Draw!";
    } else {
      message = `${winner} Wins!`;
    }
    const alertElement = `<div class="alert alert-primary mt-3" role="alert">${message}</div>`;
    
    
    const winnerMessageElement = document.querySelector('#winner-message');
    if (winnerMessageElement) {
      winnerMessageElement.innerHTML = alertElement;
    }
  }

  