import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNavigate from "./src/routes/stackNavigate";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StackNavigate></StackNavigate>
      </NavigationContainer>
    </>
  );
}
