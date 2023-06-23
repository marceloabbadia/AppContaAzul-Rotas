import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View, Text } from "react-native";
import styles from "./style";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const logar = () => {
    navigation.navigate({ name: "Home" });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.halfContainer, styles.upBackground]}>
        <Image
          source={require("../../assets/images/logotipo.png")}
          style={styles.image}
        />
      </View>

      <View style={[styles.halfContainer, styles.downBackground]}>
        <Text style={styles.textdownBackgroung}>Esqueci minha senha</Text>
      </View>

      <View style={styles.squareContainer}>
        <View style={styles.square}>
          <View style={styles.placeholderContainer}>
            <Text style={styles.placeholderText}>E-mail</Text>
          </View>
          <TextInput
            style={[
              styles.textInput,
              styles.inputWithBottomBorder1,
              {
                fontWeight: "bold",
                fontSize: 17,
                letterSpacing: 0.8,
                paddingTop: 50,
                paddingBottom: 30,
              },
            ]}
          >
            {" "}
            teste@teste.com.br{" "}
          </TextInput>

          <TextInput
            style={[
              styles.textInput,
              styles.inputWithBottomBorder2,
              {
                color: "rgba(0, 0, 0, 0.8)",
                fontSize: 17,
                letterSpacing: 0.8,
                paddingBottom: 30,
              },
            ]}
          >
            ***********
          </TextInput>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={togglePasswordVisibility}
          >
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={32}
              color="rgba(0,0,0,0.3)"
            />
          </TouchableOpacity>

          <View style={styles.bottomBorder} />

          <TouchableOpacity style={styles.button} onPress={logar}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.squareBorderTop} />
        <View style={styles.squareBorderRight} />
        <View style={styles.squareBorderBottom} />
        <View style={styles.squareBorderLeft} />
      </View>
    </View>
  );
};

export default Login;
