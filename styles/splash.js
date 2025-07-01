import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  container: {
    position: "absolute",
    bottom: 160,
    alignItems: "center",
  },
  headline: {
    fontSize: 25,
    fontWeight: "700",
    lineHeight: 25 * 1.41,
    marginBottom: 10,
    color: "#fff",
    fontFamily: "Georama-bold",
  },

  subHeadline: {
    fontSize: 16,
    lineHeight: 15 * 1.41,
    marginBottom: 20,
    color: "#fff",
    fontFamily: "Georama-bold",
  },
  button: {
    marginTop: 30,
    width: 184,
    height: 53,
    backgroundColor: "#454649",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 16 * 1.41,
    color: "#fff",
    fontFamily: "Georama-bold",
  },
});
