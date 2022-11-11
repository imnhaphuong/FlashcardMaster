import { StyleSheet } from "react-native";
import colors from "../../../contains/colors";

const styles = StyleSheet.create({
  wrapUserCard: {
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOpacity: "25%",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 2,
    height: '18%',
    width: '95%',
    marginVertical: 40,
    marginHorizontal: 10,
  },
  wrapUser: {
    marginLeft: 15,
    justifyContent: "space-between"
  },
  infor: {
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
    fontWeight: "bold",
    fontFamily: "WorkSans-Italic"
  },
  icon: {
    marginRight: 5
  }
  
});

export default styles;
