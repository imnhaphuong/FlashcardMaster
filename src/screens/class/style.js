import { StyleSheet, StatusBar, Dimensions } from "react-native";
import colors from "../../../contains/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    // backgroundColor: colors.pastelPurple,
    flexDirection: "column",
  },
  header: {
    height: 64,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: .9,
  },
  textHeader: {
    textAlign: "center",
    fontSize: 20,
    color: colors.text,
  },
  wrapContent: {
    marginHorizontal: 20,
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
    shadowOpacity: .9,
  },
  joinBtn: {
    backgroundColor: colors.violet,
  },
  textBtn: {
    fontSize: 16,
  },
  textJoin: {
    color: colors.pastelPurple,
  },
  textCreate: {
    color: colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: 10,
    height: 48,
    paddingHorizontal: 16,
    textAlign: "center",
    fontSize: 16,
    marginVertical: 20,
    color: colors.text,
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
    fontWeight: "bold",
    color: colors.darkGray,
    width: 48,
  },
  line: { flex: 1, height: 1, backgroundColor: colors.darkGray },
});

export default styles;
