import { Group, Rect } from "@shopify/react-native-skia";
import { SharedValue, useDerivedValue } from "react-native-reanimated";

interface GridSelectionProps {
  cross: SharedValue<boolean | undefined>;
}

const GridSelection = ({ cross }: GridSelectionProps) => {
  const showCross = useDerivedValue(() => {
    return cross.value ? (cross.value ? 1 : 0) : 0;
  }, [cross]);

  const showCircle = useDerivedValue(() => {
    return cross.value !== undefined ? (cross.value ? 0 : 1) : 0;
  }, []);

  return (
    <Group>
      <Group opacity={showCross}>
        <Rect width={30} height={30} x={30} y={30} color={"red"} />
      </Group>
      <Group opacity={showCircle}>
        <Rect width={30} height={30} x={30} y={30} color={"blue"} />
      </Group>
    </Group>
  );
};

export default GridSelection;
