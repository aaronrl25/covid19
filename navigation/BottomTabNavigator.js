import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/detail';
import Links from '../screens/LinksScreen';
import about from '../screens/about';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'COVID-19',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-analytics" />,
        }}
      />
      <BottomTab.Screen
        name="news"
        component={LinksScreen}
        options={{
          title: 'Countries',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-cloud" />,
        }}
      />
       <BottomTab.Screen
        name="health care"
        component={Links}
        options={{
          title: 'about',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-information" />,
        }}
      />
       <BottomTab.Screen
        name="about"
        component={about}
        options={{
          title: 'about',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-information" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return '';
    case 'Links':
      return '';
  }
}
