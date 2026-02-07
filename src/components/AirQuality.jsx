import {
    Text,
    View,
} from 'react-native';
import { airQuality } from '../airQuality.js';

export function AirQuality({ aqi }) {
    //processing
    return (
        <View>
            <Text>airQuality({aqi}) returned {airQuality(aqi)}</Text>
        </View>
    );
}