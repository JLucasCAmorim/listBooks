import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    padding: metrics.padding,
    backgroundColor: '#FEE034'
  },

  profileContainer: {
    flexDirection: 'row',
  },
  reviewContainer: {
    flexDirection: 'row',
    marginTop: 15
  },
  star: {
    fontSize: fonts.big,
    color: colors.darker,
  },
  avatar: {
    width: 100,
    height: 150,
    marginRight: metrics.padding,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: fonts.big,
    color: colors.darker,
    marginTop: 5,
  },
  bio: {
    fontSize: fonts.regular,
    color: 'rgba(0,0,0,0.3)',
    marginTop: 5,
  },
  price: {
    fontSize: fonts.big,
    color: colors.darker,
    fontWeight: 'bold',
    marginTop: 15,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 80,
  },
  content: {
    flexDirection: 'row',
  },
 firstButton: {
    marginRight: 10,
    marginLeft: 50,
    backgroundColor: colors.primary,
    width: 120,
    height: 40,
  },
  secondButton: {
    alignItems:'center',
    justifyContent:'center',
    width:40,
    height:40,
    backgroundColor: colors.pink
  },
  icon:{
    alignSelf: 'center',
    fontSize: fonts.big_regular,
    color: colors.white,
  },
  page: {
      marginLeft: -100,
      color: 'rgba(0,0,0,0.3)',
  }
});

export default styles;