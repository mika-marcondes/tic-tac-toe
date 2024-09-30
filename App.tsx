import { StyleSheet, useWindowDimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Touchable from "react-native-skia-gesture";

export default function App() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const padding = 20;

  const gridSize = windowWidth - padding;

  const rowIndex = 3;
  const colIndex = 3;

  const recWidth = gridSize / rowIndex;
  const recHeight = gridSize / colIndex;

  return (
    <GestureHandlerRootView style={styles.container}>
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
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
