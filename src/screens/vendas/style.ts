import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  halfContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  upBackground: {
    flex: 2,
    backgroundColor: "#02AFEF",
  },
  textUpBackground: {
    marginTop: 100,
    marginLeft: -285,
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "400",
  },
  downBackground: {
    flex: 8,
    backgroundColor: "#F1F4F8",
  },
  containerCaixas: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  boxLeft: {
    width: 175,
    height: 115,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    borderRadius: 5,
  },
  boxRight: {
    width: 175,
    height: 115,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    borderRadius: 5,
  },
  textLeft: {
    left: 20,
    fontSize: 17,
    top: -20,
    fontWeight: "300",
  },
  textRight: {
    left: 20,
    fontSize: 17,
    top: -20,
    fontWeight: "300",
  },
  iconLeft: {
    left: 20,
    top: 20,
  },
  iconRight: {
    left: 21,
    top: 20,
  },
});

export default styles;
