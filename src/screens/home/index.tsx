import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import styles from "./style";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upBackground}>
        <View>
          <Text style={styles.textUpBackground}>Olá, Fulano!</Text>
          <View style={styles.iconsUpBackground1}>
            <Ionicons name="ios-eye" size={24} color="white" />
          </View>
          <View style={styles.iconsUpBackground2}>
            <FontAwesome5 name="user-alt" size={18} color="white" />
          </View>
        </View>
      </View>

      <ScrollView>
        <View style={styles.centerBackground}></View>

        <View style={styles.downBackground}>
          <View style={styles.containerCaixas}>
            <View style={styles.box1}>
              <View>
                <Text style={styles.textBox1}>Sua empresa hoje</Text>
                <View>
                  <View style={styles.saldo1Icone1}>
                    <FontAwesome5
                      name="dollar-sign"
                      size={26}
                      color="#1A69C7"
                    />
                  </View>
                  <View style={styles.saldo1IconeBox1} />
                  <Text style={styles.saldo1}>Saldo</Text>
                  <Text style={styles.saldo2}>R$ 2.314,41</Text>

                  <View style={styles.saldo1Icone2}>
                    <AntDesign name="arrowup" size={26} color="green" />
                  </View>

                  <View style={styles.saldo1IconeBox2} />
                  <Text style={styles.saldo3}>A receber</Text>
                  <Text style={styles.saldo4}>R$ 120,05</Text>

                  <View style={styles.saldo1Icone3}>
                    <Feather name="arrow-down" size={26} color="red" />
                  </View>

                  <View style={styles.saldo1IconeBox3} />

                  <Text style={styles.saldo5}>A pagar</Text>
                  <Text style={styles.saldo6}>R$ 1.738,00</Text>
                  <TouchableOpacity>
                    <Text style={styles.saldo10}>Ver fluxo de caixa</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.box2}>
              <View>
                <Text style={styles.textBox2}>Em atraso</Text>
                <Text style={styles.textBox22}>Até 22/06/2017</Text>
              </View>

              <View style={styles.barraVerde}></View>
              <View style={styles.recebimentos}>
                <Text style={styles.textRecebimentos}>Recebimentos</Text>
                <Text style={styles.textMoney}> R$ 4.120,52</Text>
              </View>

              <View style={styles.barraVermelha}></View>
              <View style={styles.pagamentos}>
                <Text style={styles.textPagamentos}>Pagamentos</Text>
                <Text style={styles.textMoney}>R$ 5.458,52</Text>
              </View>
            </View>

            <View style={styles.box3}>
              <View>
                <Text style={styles.textBox3}>Orçamento e vendas</Text>
                <Text style={styles.textBox33}>Junho de 2023</Text>
              </View>
              <View style={styles.barraAzul}></View>
              <View style={styles.barrasVendas}>
                <Text style={styles.textVendas2}>Vendas</Text>
                <Text style={styles.textMoney1}> R$ 4.120,52</Text>
              </View>

              <Text style={styles.textVendas1}>2</Text>

              <View style={styles.barraAmarela}></View>
              <View style={styles.barrasOrcamentos}>
                <Text style={styles.textOrcamentos2}>Orçamentos</Text>
                <Text style={styles.textMoney1}>R$ 5.458,52</Text>
              </View>

              <Text style={styles.textOrcamentos1}>5</Text>

              <View style={styles.barraVerde1}></View>
              <View style={styles.barrasAceitos}>
                <Text style={styles.textAceitos2}>Aceitos</Text>
                <Text style={styles.textMoney1}> R$ 4.120,52</Text>
              </View>

              <Text style={styles.textAceitos1}>4</Text>

              <View style={styles.barraVermelha1}></View>
              <View style={styles.barrasRecusados}>
                <Text style={styles.textRecusados2}>Recusados</Text>
                <Text style={styles.textMoney1}> R$ 4.120,52</Text>
              </View>

              <Text style={styles.textRecusados1}>3</Text>
              <TouchableOpacity>
                <View>
                  <Text style={styles.textMaisDetalhes}> Mais detalhes</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.box4}>
              <View>
                <Text style={styles.text1Box4}>Gráfico de vendas</Text>
              </View>
              <View>
                <Text style={styles.text2Box4}>Últimos 12 meses</Text>
              </View>

              <TouchableOpacity>
                <View style={styles.box4Icone1}>
                  <Entypo
                    name="chevron-small-right"
                    size={50}
                    color="#1A69C7"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.box5}>
              <View>
                <Text style={styles.textBox5}>Precisa de ajuda?</Text>
              </View>
              <View style={styles.textFinal}>
                <Text style={styles.textFinal1}>Fale com a gente pelo </Text>
                <Text style={styles.textFinal1}>
                  Whastapp, tire suas dúvidas e{" "}
                </Text>
                <Text style={styles.textFinal1}>acompanhe seus chamados.</Text>
              </View>
              <View style={styles.contentImage}>
                <Image
                  source={require("../../assets/images/secretary.png")}
                  style={{ width: 80, height: 80 }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
