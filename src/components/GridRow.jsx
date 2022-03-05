import react from "react";
import GridItem from "./GridItem";

class GridRow extends react.Component {
  render() {
    return (
      <div className="grid-row">
        {[0, 1, 2].map((col) => {
          return (
            <GridItem
              rowIndex={this.props.index}
              colIndex={col}
              boardState={this.props.boardState}
              updateBoard={this.props.updateBoard}
            />
          );
        })}
      </div>
    );
  }
}

export default GridRow;
