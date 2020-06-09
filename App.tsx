import React from 'react';
import {View, Text} from 'react-native';

interface AppProps {
  pippo?: string;
}

const App: React.FC<AppProps> = () => {
  return (
    <View>
      <Text> NV2 </Text>
    </View>
  );
};

export default App;
