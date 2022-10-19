import { StyleSheet } from "react-native";
import colors from "../../../contains/colors";

const styles = StyleSheet.create({
  wrapUserCard: {
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    shadowColor: colors.black,
    shadowOpacity: "25%",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 2,
    height: 60,
    marginBottom: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  wrapUser: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 100,
    marginRight: 20,
  },
  username: {
    fontSize: 14,
    color: colors.text,
  },
});

export default styles;
