import { Hello } from './Hello.jsx';
import { SnowRemoval } from './SnowRemoval.jsx';
import {
  View,
} from 'react-native';
import { SquareFeet2Acres } from './SqareFeet2Acres.jsx';
import { AirQuality } from './AirQuality.jsx';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <SnowRemoval cm={3} />
      <SquareFeet2Acres squareFeet={43560} />
      <SquareFeet2Acres squareFeet={87120} />
      <SquareFeet2Acres squareFeet={130680} />
      <AirQuality aqi={7} />
      <AirQuality aqi={64} />
      <AirQuality aqi={144} />
      <AirQuality aqi={234} />
      <AirQuality aqi={304} />
    </View>
  );
}

