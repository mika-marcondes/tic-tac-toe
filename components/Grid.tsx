import Touchable from "react-native-skia-gesture";
import { useWindowDimensions } from "react-native";

export const Grid = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const padding = 20;
  const rowIndex = 3;
  const colIndex = 3;

  const gridSize = windowWidth - padding;

  const recWidth = gridSize / rowIndex;
  const recHeight = gridSize / colIndex;

  return (
    <Touchable.Canvas
      style={{
        width: gridSize,
        height: gridSize,
        backgroundColor: "grey",
      }}
    >
      {new Array(rowIndex).fill(0).map((_, i) => {
        return new Array(colIndex).fill(0).map((_, j) => {
          return (
            <Touchable.Rect
              x={i * recWidth}
              y={j * recHeight}
              width={recWidth}
              height={recHeight}
              color="lightgrey"
            />
          );
        });
      })}
    </Touchable.Canvas>
  );
};
