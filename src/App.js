import react from "react";
import "./App.css";
import GridItem from "./components/GridItem";
import GridRow from "./components/GridRow";

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      turn: "X"
    };
  }

  updateBoard = (row, col) => {
    const arr = this.state.boardState;
    arr[row][col] = this.state.turn;
    this.setState({
      turn: this.state.turn === "X" ? "O" : "X",
      boardState: arr
    });
  };

  render() {
    return (
      <>
        <div className="header">Tic Tac Toe</div>
        <div className="container">
          {[0, 1, 2].map((row) => {
            return (
              <GridRow
                index={row}
                boardState={this.state.boardState}
                updateBoard={this.updateBoard}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default App;
