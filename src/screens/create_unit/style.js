import { StyleSheet, StatusBar } from "react-native";
import colors from "../../../contains/colors";
import fonts from "../../../contains/fonts"
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
    fontFamily: 'WorkSans-SemiBold',
   
  },
  label: {
    flex: 1,
  },
  content: {
    flex: 2,
    margin: 20,
  },
  textInput: {
    backgroundColor: colors.white,
    height: 64,
    fontFamily: 'WorkSans',
  },
  containerCB: {
    marginTop: 10,
  },
  checkbox: {
    height: 24,
    width: 24,
    borderRadius: 10,
    resizeMode: "contain",
  },
  labelCheckbox: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: 'WorkSans',
  },
  createCard: {
    marginTop: 10,
  },
  add: {
    position: 'absolute',
    bottom: '8%',
    right: '5%'
  },
  addIcon: {
    backgroundColor: colors.violet,
    borderRadius: 50,
    width: 52,
    height: 52,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  formCard: {
    flex: 1,
    marginVertical: 10,
    backgroundColor: colors.white,
    padding: 10,
    height: "100%",
    borderRadius: 10,
  },
  text: {
    fontFamily:fonts.semibold,
    fontSize:16,
  }

});
export default styles;