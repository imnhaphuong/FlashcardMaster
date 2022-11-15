import { StyleSheet, StatusBar, Dimensions } from "react-native";
import colors from "../../../contains/colors";
import fonts from "../../../contains/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pastelPurple,
    flexDirection: "column",
  },
  header: {
    height: 64,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.text,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  textHeader: {
    textAlign: "center",
    fontFamily: fonts.regular,
    fontSize: 20,
    color: colors.text,
  },
  wrapFlatList: {
    padding: 20,
  },
  btn: {
    flexDirection: "row",
    borderRadius: 10,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  createBtn: {
    backgroundColor: colors.yellow,
    shadowColor: colors.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
  },

  joinBtn: {
    backgroundColor: colors.violet,
  },

  textBtn: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.pastelPurple,
  },

  input: {
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: 10,
    height: 48,
    paddingHorizontal: 16,
    textAlign: "center",
    fontFamily: fonts.regular,
    fontSize: 16,
    marginBottom: 8,
    color: colors.text,
    shadowColor: colors.black,
    shadowOpacity: "25%",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 1,
    backgroundColor: colors.white,
  },
  wrapOr: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  or: {
    textAlign: "center",
    fontSize: 12,
    fontFamily: fonts.semibold,
    color: colors.darkGray,
    width: 48,
  },
  joined: {
    textAlign: "center",
    fontSize: 12,
    fontFamily: fonts.semibold,
    color: colors.darkGray,
    width: 172,
  },
  textCreate: {
    color: colors.text,
  },
  line: { flex: 1, height: 1, backgroundColor: colors.graySecondary },
});

export default styles;
