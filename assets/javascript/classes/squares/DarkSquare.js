class DarkSquare {
  constructor(color = "black", rowIndex, colIndex, board, parent) {
    super(color, rowIndex, colIndex, board, parent);
    this.hasPiece = false;
  }

  generate() {
    this.element = document.querySelector("div");
    this.element.classList.add("square", "darksquare");
    this.element.addEventListener("click", () => this.handleClick());
    this.parent.append(this.element);
  }

  handleClick() {
    console.log("click", rowIndex, colIndex);
  }
}
