import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Auth/Login/Login';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
    </Navigator>
  );
}
