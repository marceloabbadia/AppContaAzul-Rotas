import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Financeiro = () => {
  const handleButtonPress = () => {};

  return (
    <View style={styles.container}>
      <View style={[styles.halfContainer, styles.upBackground]}>
        <Text style={styles.textUpBackground}>Financeiro</Text>
      </View>

      <View style={[styles.halfContainer, styles.downBackground]}>
        <View style={styles.containerCaixas}>
          <TouchableOpacity onPress={handleButtonPress}>
            <View style={styles.boxLeft}>
              <View style={styles.iconLeft}>
                <FontAwesome5 name="receipt" size={24} color="#1A69C7" />
              </View>
              <View>
                <Text style={styles.textLeft}>Extrato de</Text>
                <Text style={styles.textLeft}>movimentações</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleButtonPress}>
            <View style={styles.boxLeftDown}>
              <View style={styles.iconLeft}>
                <MaterialCommunityIcons
                  name="chart-timeline"
                  size={24}
                  color="#1A69C7"
                />
              </View>
              <View>
                <Text style={styles.textLeft}>Conciliações</Text>
                <Text style={styles.textLeft}>pendentes</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleButtonPress}>
            <View style={styles.boxRight}>
              <View style={styles.iconRight}>
                <MaterialCommunityIcons
                  name="chart-waterfall"
                  size={24}
                  color="#1A69C7"
                />
              </View>

              <View>
                <Text style={styles.textRight}>Fluxo de </Text>
                <Text style={styles.textRight2}> caixa diário</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Financeiro;
