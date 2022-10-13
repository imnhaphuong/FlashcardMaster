import { StyleSheet, StatusBar } from 'react-native'
import colors from '../../../contains/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.pastelPurple,
    //marginTop: StatusBar.currentHeight || 0
  },
  header: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    elevation: 2
  },
  landscape: {
    width: 186,
    height: 40,
    resizeMode: 'contain'
  },
  coin_display: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  coin: {
    width: 24,
  },
  price: {
    width: 35,
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'center',
    textAlign: 'center',
    color: '#001E1D',
    marginLeft: 3,
  },
  scroolview: {
    flex: 2,
  },
  welcome: {
    flexWrap: 'wrap',
    marginHorizontal: 20,
    marginTop: 30,
    position: 'relative',
    height: 124,
  },
  group21: {
    position: 'absolute',
    height: '66%',
    width: '100%',
    bottom: 0,
    backgroundColor: '#F7D6E1',
    borderRadius: 10,
    zIndex: 0,
    elevation: 0,
    justifyContent: 'center'
  },
  Thegirl: {
    position: 'absolute',
    elevation: 10,
    zIndex: 10,
    height: 124,
    width: '100%',
    right: 0,
    backgroundColor: 'none',
  },
  ThegirlItem: {
    position: 'absolute',
    right: 0
  },
  hello: {
    alignItems: 'center',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.text,
    zIndex: 20,
    elevation: 20,
    marginLeft: 20
  },
  helloname: {
    color: colors.violet,
  },
  search:{
    position: 'absolute',
    bottom: '8%',
    right: '5%'
  },
  searchicon:{
    backgroundColor: colors.violet,
    borderRadius: 50,
    width: 48,
    height: 48,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});

export default styles