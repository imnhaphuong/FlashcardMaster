import { StyleSheet, StatusBar } from "react-native";
import colors from "../../../contains/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  titleBar: {
  },
  inforArea: {},
  wrapUnits: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    paddingHorizontal: 12,
  },
})

export default styles
