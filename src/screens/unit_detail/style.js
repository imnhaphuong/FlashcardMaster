import { StyleSheet, StatusBar } from "react-native";
import colors from "../../../contains/colors";

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
    fontSize: 20,
    color: colors.text,
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
    color: colors.text,
    justifyContent: "center",
    height: 45,
    fontSize: 16,
  },
  wrapContent: {
    position: "relative",
    paddingTop: 15,
    backgroundColor: colors.yellow
  },
  inforArea: {
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  unitName: {
    fontWeight: "bold",
    fontSize: 20,
    color: colors.text,
    paddingBottom: 8,
  },
  wrapUser: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 100,
    marginRight: 4,
  },
  username: {
    fontSize: 15,
    color: colors.text,
  },
  numberOfUnits: {
    fontSize: 14,
    color: colors.text,
  },

  wrapUnits: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    paddingHorizontal: 12,
    paddingTop: 20,
  },
  wrapFlipCards: {
    paddingLeft: 20,
    paddingVertical: 20,
  },
  btn: {
    flexDirection: "row",
    borderRadius: 10,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 12,
  },
  btnLearn: {
    backgroundColor: colors.violet,
  },
  btnMatch: {
    backgroundColor: colors.yellow,
  },
  btnTest: {
    backgroundColor: colors.pink,
  },
  textBtn: {
    fontSize: 16,
    fontWeight: "600",
  },
  textLearn: {
    color: colors.pastelPurple,
  },
  wrapButtons: {
    marginHorizontal: 20,
  },
  wrapListCardsArea: {
    marginHorizontal: 20,
  },
});

export default styles;
