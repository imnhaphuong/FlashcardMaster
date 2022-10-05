import { StatusBar, StyleSheet } from "react-native";
import colors from "../../../contains/colors";

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  modalView: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 24,
    alignItems: "center",
    shadowColor: colors.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  form: {
    backgroundColor: 'red'
  },
  inputClassName: {
    width: '100%',
    borderColor: colors.violet,
    height: 48,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  wrapButtons: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonCancel: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 12,
  },
  buttonCreate: {
    backgroundColor: colors.violet,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textCancel: {
    color: colors.violet,
  },
  textCreate: {
    color: colors.pastelPurple,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
