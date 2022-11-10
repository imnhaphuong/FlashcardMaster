import { StyleSheet, StatusBar } from "react-native";
import colors from "../../../contains/colors";
import fonts from "../../../contains/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pastelPurple,
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    height: 64,
    backgroundColor: colors.white,
    shadowColor: colors.text,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
    zIndex: 10,
  },
  textHeader: {
    textAlign: "center",
    fontFamily: fonts.regular,
    fontSize: 20,
    color: colors.text,
  },
  wrapContent: {
    position: "relative",
  },
  wrapOptions: {
    position: "absolute",
    top: 0,
    right: "1%",
    width: "50%",
    backgroundColor: colors.white,
    borderRadius: 10,
    alignItems: "center",
    textAlign: "center",
    borderColor: colors.graySecondary,
    borderWidth: 1,
    shadowColor: colors.violet,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
    zIndex: 10,
  },
  option: {
    width: '100%',
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
  },
  inforArea: {
    height: 150,
    backgroundColor: colors.white,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  className: {
    fontFamily: fonts.bold,
    fontSize: 20,
    color: colors.text,
  },
  wrapUser: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 100,
    marginRight: 4,
  },
  username: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.violet,
  },
  numberOfUnits: {
    fontSize: 14,
    color: colors.violet,
  },

  wrapUnits: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    paddingHorizontal: 12,
    paddingTop: 20,
  },
});

export default styles;
