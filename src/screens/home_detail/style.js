import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  boderbottom: {
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    position:'absolute',
    height: 80,
    left: 0,
    right: 0,
    top: 44,
    backgroundColor: '#FFFFFF',
  },
  landscape: {
    width: 186,
    height: 40,
  },
  coin_display: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'space-between',
    width: 76,
    height: 38,
    flex:'none',
    flexGrow: 0,
    //gap: 8,
    //order: 1,
  },
  coin:{
    width: 24,
    height:22,
    flex:'none',
    flexGrow: 0,
    top: 8,
    left: 8
    //order: 0,

    // marginTop: 13,
    // marginLeft: 60,
  },
  price: {
    width: 30,
    height: 19,
    top:7,
    left:4,
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight:'500',
    fontSize: 16,
    lineHeight: 19,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#001E1D',
    flex: 'none',
    flexGrow: 0,
  },
  wellcome: {
    position: 'absolute',
    width: 370,
    height: 124,
    left: 20,
    top: 156,
  },
  chatyel: {
    position: 'absolute',
    width: 48,
    height: 23,
    left: 322,
    top: 20,
    //transform: ([{matrix(-1, 0, 0, 1, 0, 0)])
  },
  chatvio: {
    position: 'absolute',
    width: 48,
    height: 24,
    left: 247,
    top: 0,
  },
  group21:{
    position: 'absolute',
    width: 370,
    height: 107,
    left: 0,
    bottom: 0
  },
  thegirl: {
    position: 'absolute',
    width: 112,
    height: 106,
    left: 247,
    top: 0
  },
  group22:{
    position: 'absolute',
    left: -20,
    width: 370,
    height: 82,
    top: -173
  },
  hello:{
    position: 'absolute',
    width: 202,
    height: 23,
    left: 40,
    top: 227,
    fontStyle: 'normal',
    fontWeight:'500',
    fontSize: 16,
    lineHeight: 19,
    display: 'flex',
    alignItems:'center',
    color: '#000000'
  },
  rectangle:{
    position:'absolute',
    width: 370,
    height: 82,
    left: 20,
    top: 197,
    borderRadius: 10,
    backgroundColor: '#F7D6E1'
  },
});

export default styles