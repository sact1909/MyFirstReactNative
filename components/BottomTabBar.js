/* eslint-disable prettier/prettier */
import * as React from 'react';
import {
  BottomNavigation,
  Text,
} from 'react-native-paper';
import HomeTab from './TabSections/HomeTab';
import FuelsTab from './TabSections/FuelsTab';

const RecentsRoute = () => <Text>Recents</Text>;

const BottomTabBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'Home', icon: 'home'},
    {key: 'fuels', title: 'Fuels', icon: 'local-gas-station'},
    {key: 'recents', title: 'Recents', icon: 'history'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeTab,
    fuels: FuelsTab,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomTabBar;
