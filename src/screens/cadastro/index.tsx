import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Cadastro = () => {
  const handleButtonPress = () => {};

  return (
    <View style={styles.container}>
      <View style={[styles.halfContainer, styles.upBackground]}>
        <Text style={styles.textUpBackground}>Cadastros</Text>
      </View>

      <View style={[styles.halfContainer, styles.downBackground]}>
        <View style={styles.containerCaixas}>
          <TouchableOpacity onPress={handleButtonPress}>
            <View style={styles.boxLeft}>
              <View style={styles.iconLeft}>
                <Feather name="users" size={32} color="#1A69C7" />
              </View>
              <View>
                <Text style={styles.textLeft}>Clientes</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleButtonPress}>
            <View style={styles.boxLeftDown}>
              <View style={styles.iconLeft}>
                <MaterialCommunityIcons
                  name="package-variant"
                  size={32}
                  color="#1A69C7"
                />
              </View>
              <View>
                <Text style={styles.textLeft}>Serviços</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleButtonPress}>
            <View style={styles.boxRight}>
              <View style={styles.iconRight}>
                <MaterialCommunityIcons
                  name="package-variant"
                  size={32}
                  color="#1A69C7"
                />
              </View>

              <View>
                <Text style={styles.textRight}>Produtos </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cadastro;
