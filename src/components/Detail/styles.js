import { StyleSheet } from 'react-native';
import { metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
  container: {
    padding: metrics.padding,
    backgroundColor: '#FFF',
    flex: 1
  },
  text: {
    textAlign: 'justify',
    fontSize: fonts.regular
    }
});

export default styles;