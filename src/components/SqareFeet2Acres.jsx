import {
    Text,
    View,
} from 'react-native';
import { sf2acres } from '../sf2acres.js';

export function SquareFeet2Acres({ squareFeet }) {
    //processing
    let acre = sf2acres(squareFeet);
    //output for acre
    return (
        <View>
            <Text>sf2acres({squareFeet}) returned {acre}</Text>
        </View>
    );
}