class Square {
  constructor(color, rowIndex, colIndex, board, parent) {
    this.color = color;
    this.rowIndex = rowIndex;
    this.colIndex = colIndex;
    this.board = board;
    this.row = board[rowIndex];
    this.parent = parent;
  }
}
