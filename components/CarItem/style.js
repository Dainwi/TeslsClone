import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
    fontSize: "14px",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
    // border: "1px solid black",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  images: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});
export default styles;
