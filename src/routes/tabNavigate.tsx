import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Financeiro from "../screens/financeiro";
import Vendas from "../screens/vendas";
import Cadastro from "../screens/cadastro";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import New from "../screens/new/new";
import { View } from "react-native/types";

const Tab = createBottomTabNavigator();

const TabNavigate = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "#1A69C7",
        tabBarInactiveBackgroundColor: "#FFFFFF",
        tabBarStyle: {
          height: 120,
          paddingBottom: 35,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          top: -15,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "Início",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={"#1A69C7"} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="vendas"
        component={Vendas}
        options={{
          headerShown: false,
          tabBarLabel: "Vendas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="ios-document-text-sharp"
              color={"#1A69C7"}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="new"
        component={Home}
        options={{
          headerShown: false,
          tabBarIconStyle: {
            position: "relative",
            top: -35,
          },
          tabBarLabel: "",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="pluscircle" size={60} color={"#1A69C7"} />
          ),
        }}
      />

      <Tab.Screen
        name="financeiro"
        component={Financeiro}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Foundation name="dollar" color={"#1A69C7"} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="cadastro"
        component={Cadastro}
        options={{
          tabBarLabel: "Cadastros",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" size={26} color="#1A69C7" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigate;
