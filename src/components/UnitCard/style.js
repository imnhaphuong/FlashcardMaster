import { StyleSheet } from "react-native";
import colors from "../../../contains/colors";
import fonts from "../../../contains/fonts";

const styles = StyleSheet.create({
  wrapUnitCard: {
    flex: 1,
    borderRadius: 5,
    padding: 16,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: "25%",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 2,
    height: 112,
    marginHorizontal: 8,
    marginBottom: 6,
    justifyContent: "space-evenly",
  },
  unitName: {
    fontFamily: fonts.semibold,
    fontSize: 14,
    color: colors.text,
  },
  numberOfCards: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.darkGray,
  },
  wrapUser: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 16,
    height: 16,
    borderRadius: 100,
    marginRight: 4,
  },
  username: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.violet,
  },
  tagMode: {
    position: "absolute",
    right: 0,
    top: 0,
    width: 56,
    height: 56,
    resizeMode: "contain",
  },
});

export default styles;
