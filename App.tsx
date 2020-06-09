import React from 'react';
import Header from './components/atoms/Header';
import TabNavigator from './components/atoms/TabNavigator';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Header />
      <TabNavigator />
    </>
  );
};

export default App;
