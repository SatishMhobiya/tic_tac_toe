import react from "react";

class GridItem extends react.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div
          className="grid-item"
          onClick={() => {
            this.props.updateBoard(this.props.rowIndex, this.props.colIndex);
          }}
        >
          {this.props.boardState[this.props.rowIndex][this.props.colIndex]}
        </div>
      </>
    );
  }
}

export default GridItem;
