import React from "react";
import { View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

type ButtonNew = {
  size: number;
  color: string;
};

export default function ButtonNew({ size, color }: ButtonNew): JSX.Element {
  return (
    <View style={styles.container}>
      <Entypo name="plus" size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    heigth: 160,
    borderRadius: 30,
    backgroundColor: "#1A69C7",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
