import { StyleSheet } from 'react-native';

import { FONT, SIZES, COLORS } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
    padding: SIZES.xSmall
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary
  },
  errorMsg: {
    textAlign: 'center',
    color: COLORS.red,
    paddingVertical: SIZES.large
  },
  headerBtn: {
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    color: COLORS.gray
  },
  cardsContainer: {
    marginTop: SIZES.medium
  }
});

export default styles;