import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../contains/colors";
import fonts from "../../../contains/fonts";

const styles = StyleSheet.create({
  wrapNotiCard: {
    position: "relative",
    flex: 1,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderColor: colors.text,
    borderWidth: 1,
    backgroundColor: colors.white,
    shadowColor: colors.darkGray,
    shadowOpacity: "25%",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    flexDirection: "row",
    elevation: 1,
    height: 140,
    marginBottom: 8,
    paddingVertical: 20,
  },
  title: {
    fontFamily: fonts.semibold,
    color: colors.text,
    fontSize: 16,
  },
  wrapMembers: {
    flexDirection: "row",
    alignItems: "center",
  },
  numberOfMembers: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.darkGray,
    marginLeft: 4,
  },
  message: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.violet,
  },
  date: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.darkGray,
    textAlign: "right"
  },
  remove: {
    position: "absolute",
    right: 0,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    resizeMode: "contain",
    zIndex: 10
  },
});

export default styles;
