import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../contains/colors";

const styles = StyleSheet.create({
  wrapClassCard: {
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
    height: 100,
    marginBottom: 8,
    justifyContent: "space-evenly",
  },
  className: {
    fontWeight: "bold",
    color: colors.text,
    fontSize: 16,
  },
  wrapMembers: {
    flexDirection: "row",
    alignItems: "center",
  },
  numberOfMembers: {
    fontSize: 12,
    color: colors.darkGray,
    marginLeft: 4,
  },
  wrapCreator: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarCreator: {
    width: 16,
    height: 16,
    borderRadius: 100,
  },
  usernameCreator: {
    fontSize: 12,
    color: colors.violet,
    marginLeft: 4,
  },
  tagMode: {
    position: "absolute",
    right: 0,
    top:0,
    width: 56,
    height: 56,
    resizeMode: "contain",
  }
});

export default styles;
