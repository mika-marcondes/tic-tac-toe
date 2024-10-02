import Touchable, { useGestureHandler } from "react-native-skia-gesture";
import { useWindowDimensions } from "react-native";
import { Group, Paint, Rect } from "@shopify/react-native-skia";
import GridSelection from "./GridSelection";
import { useSharedValue } from "react-native-reanimated";

export const Grid = () => {
  const { width: windowWidth } = useWindowDimensions();

  const padding = 20;

  const rowIndex = 3;
  const colIndex = 3;

  const gridSize = windowWidth - padding;
  const gridStroke = 4;
  const gridCellColor = "transparent";
  const gridStrokeColor = "black";
  const gridOffset = -10;
  const gridOverlaySize = 500;

  const recWidth = gridSize / rowIndex;
  const recHeight = gridSize / colIndex;

  const showCross = useSharedValue<undefined | boolean>(undefined);

  const gesture = useGestureHandler({
    onStart: (touchInfo) => {
      "worklet";
      console.log("ai", touchInfo);
      console.log(gridSize);
      console.log(showCross.value);
      showCross.value = !showCross.value;
    },
  });

  return (
    <Touchable.Canvas
      style={{
        width: gridSize,
        height: gridSize,
      }}
    >
      {new Array(rowIndex).fill(0).map((_, i) => {
        return new Array(colIndex).fill(0).map((_, j) => {
          return (
            <Group key={j}>
              <Touchable.Rect
                {...gesture}
                x={i * recWidth}
                y={j * recHeight}
                width={recWidth}
                height={recHeight}
                color={"lightgrey"}
              />
              <Group
                transform={[
                  { translateX: i * recWidth },
                  { translateY: j * recHeight },
                ]}
              >
                <GridSelection cross={showCross} />
              </Group>
            </Group>
          );
        });
      })}
      <Group>
        <Rect
          width={recWidth}
          height={gridOverlaySize}
          x={gridSize / colIndex}
          y={gridOffset}
          color={gridCellColor}
        >
          <Paint
            color={gridStrokeColor}
            style={"stroke"}
            strokeWidth={gridStroke}
          ></Paint>
        </Rect>
        <Rect
          width={gridOverlaySize}
          height={recHeight}
          x={gridOffset}
          y={gridSize / colIndex}
          color={gridCellColor}
        >
          <Paint
            color={gridStrokeColor}
            style={"stroke"}
            strokeWidth={gridStroke}
          ></Paint>
        </Rect>
      </Group>
    </Touchable.Canvas>
  );
};
