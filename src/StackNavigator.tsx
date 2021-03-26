import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import LoginPage from './screens/login';
import HomePage from './screens/homepage';
import RegisterPage from './screens/register';

import { CometChatMessages } from './components';

interface Props {
  isLoggedIn: boolean;
}

const StackNavigator = (props: Props) => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName={props.isLoggedIn ? 'HomePage' : 'LoginPage'}
      >
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="CometChatMessages" component={CometChatMessages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = ({ reducer }: any) => {
  return {
    loading: reducer.loading,
    error: reducer.error,
    isLoggedIn: reducer.isLoggedIn,
  };
};

export default connect(mapStateToProps)(StackNavigator);
