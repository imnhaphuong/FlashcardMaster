import { StyleSheet } from "react-native";
import colors from "../../../contains/colors";
import fonts from "../../../contains/fonts";

const styles = StyleSheet.create({
  wrapUserCard: {
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
    elevation: 1,
    height: 140,
    marginBottom: 8,
    justifyContent: "space-evenly",
  },
  infor: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapUser: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  username: {
    fontSize: 16,
    fontFamily: fonts.semibold,
    color: colors.text
  },
  public: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.darkGray,
    marginLeft: 4,
  },
  email: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.violet,
    marginLeft: 8,
  }
  
});

export default styles;
