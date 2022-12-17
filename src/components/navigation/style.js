import { StyleSheet } from "react-native";
import colors from "../../../contains/colors";
import fonts from "../../../contains/fonts";

const Styles = StyleSheet.create({
  view: {
    alignItems: "center",
    justifyContent: "center",
  },
  scrolling: {
    backgroundColor: colors.pastelPurple,
    paddingVertical: 10
  },
  textScrolling: {
    fontFamily: fonts.semibold,
    fontSize: 14,
  },
});

export default Styles;
