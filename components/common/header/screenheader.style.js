import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnImg: {
    width: '60%',
    height: '60%',
    borderRadius: SIZES.small / 1.25
  },
  btnImageFull: {
    width: '100%',
    height: '100%',
    borderRadius: SIZES.small / 0.4
  }
});

export default styles;