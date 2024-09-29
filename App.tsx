import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Canvas, Rect} from "@shopify/react-native-skia";
import {GestureHandlerRootView, RectButton} from "react-native-gesture-handler";
import Touchable from "react-native-skia-gesture"

export default function App() {
    const recWidth = 80;
    const recHeight = 80;
    const recContainer = 90;

    const gridSize = 300;
    const rowIndex = 3;
    const colIndex = 3;

    return (
        <GestureHandlerRootView style={styles.container}>
            <Touchable.Canvas style={{width: gridSize, height: gridSize, backgroundColor: 'lightblue'}}>
                {new Array(rowIndex).fill(0).map((_, i) => {
                    return new Array(colIndex).fill(0).map((_, j) => {
                        return <Touchable.Rect
                            x={i * recContainer}
                            y={j * recContainer}
                            width={recWidth}
                            height={recHeight}
                            color="lightgrey"
                        />
                    })
                })}
            </Touchable.Canvas>

        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1b1a1a',
    },
});
