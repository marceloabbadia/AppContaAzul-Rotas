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
    backgroundColor: "#02AFEF",
  },
  image: {
    width: 260,
  },
  downBackground: {
    backgroundColor: "#F1F4F8",
  },
  squareContainer: {
    position: "absolute",
    width: "93%",
    height: 250,
    alignSelf: "center",
    top: "50%",
    marginTop: -63,
    overflow: "hidden",
  },
  square: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  squareBorderTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: "#47C1EE",
  },
  squareBorderRight: {
    position: "absolute",
    top: 0,
    bottom: "75%",
    right: 0,
    width: 3,
    backgroundColor: "#47C1EE",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  squareBorderBottom: {
    position: "absolute",
    border: "none",
  },
  squareBorderLeft: {
    position: "absolute",
    top: 0,
    bottom: "75%",
    left: 0,
    width: 3,
    backgroundColor: "#47C1EE",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  placeholderContainer: {
    position: "absolute",
    top: 23,
    left: 17,
    zIndex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  placeholderText: {
    fontSize: 13,
    color: "rgba(0,0,0,0.7)",
  },
  textInput: {
    height: 40,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 16,
    color: "#000",
    marginVertical: 10,
  },
  inputWithBottomBorder1: {
    width: "99%",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  inputWithBottomBorder2: {
    width: "99%",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
  iconContainer: {
    position: "absolute",
    top: 110,
    right: 25,
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#888",
  },
  button: {
    marginTop: 5,
    marginBottom: 10,
    width: "100%",
    height: 65,
    backgroundColor: "#DBEEE2",
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  textdownBackgroung: {
    color: "#1A69C7",
    fontWeight: "bold",
    fontSize: 17,
    letterSpacing: 0.3,
  },
});

export default styles;
