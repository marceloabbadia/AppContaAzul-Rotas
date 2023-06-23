import Login from "../screens/login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigate from "./tabNavigate";

const Stack = createNativeStackNavigator();

const StackNavigate = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={TabNavigate}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigate;
