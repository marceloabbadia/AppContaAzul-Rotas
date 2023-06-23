import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { FontAwesome5 } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const Vendas = () => {
  const handleButtonPress = () => {};

  return (
    <View style={styles.container}>
      <View style={[styles.halfContainer, styles.upBackground]}>
        <Text style={styles.textUpBackground}>Vendas</Text>
      </View>

      <View style={[styles.halfContainer, styles.downBackground]}>
        <View style={styles.containerCaixas}>
          <TouchableOpacity onPress={handleButtonPress}>
            <View style={styles.boxLeft}>
              <View style={styles.iconLeft}>
                <FontAwesome5 name="handshake" size={24} color="#1A69C7" />
              </View>
              <View>
                <Text style={styles.textLeft}>Orçamentos e</Text>
                <Text style={styles.textLeft}>vendas</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleButtonPress}>
            <View style={styles.boxRight}>
              <View style={styles.iconRight}>
                <Octicons name="graph" size={27} color="#1A69C7" />
              </View>

              <View>
                <Text style={styles.textRight}>Vendas por </Text>
                <Text style={styles.textRight}> vendedor</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Vendas;
