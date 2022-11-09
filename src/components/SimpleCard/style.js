import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../contains/colors";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    width: "100%",
    height: 120,
    justifyContent: "space-between",
    backgroundColor: colors.white,
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOpacity: "25%",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 2,
    padding: 12,
    marginBottom: 12,
  },
  wrapText: {
    width: "65%",
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    fontFamily: "System",
    color: colors.text,
    backgroundColor: "transparent",
  },
  define: {
    color: colors.darkGray,
  },
  example: {
    fontStyle: "italic",
    color: colors.highlight,
    fontSize: 13,
  },
  img: {
    height: "100%",
    width: "35%",
    resizeMode: "contain",
  },
  listenButton: {
    position: "absolute",
    zIndex: 20,
    top: 0,
    right: 0,
    paddingTop: 8,
    paddingBottom: 10,
    paddingRight: 8,
    paddingLeft: 16,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 5,
    shadowColor: colors.black,
    shadowOpacity: "25%",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 2,
  },
  listenButtonActived: {
    backgroundColor: colors.yellow,
  },
});

export default styles;
