import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../contains/colors";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  cardContainer: {
    width: Dimensions.get("window").width - 40,
    height: 200,
    marginRight: 20,
  },
  card: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOpacity: "25%",
    backgroundColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 2,
  },
  label: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "System",
    color: colors.text,
    paddingBottom: 8,
    paddingTop: 0
  },
  example: {
    fontStyle: "italic",
    color: colors.highlight
  },
  img: {
    height: 100,
    width:  Dimensions.get("window").width - 80,
    resizeMode: "contain",
  },
  listenButton: {
    position: "absolute",
    top: 12,
    right: 12,
    padding: 8,
  },
});

export default styles;
