import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    backgroundColor: '#FFF',
    borderRadius: SIZES.small,
    padding: SIZES.medium,
  },
  title: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    marginVertical: SIZES.xSmall
  },
  contentContainer: {
    gap: SIZES.large,
    marginTop: SIZES.medium
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  contentDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: COLORS.gray2,
    marginTop: 6
  },
  contentText: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: SIZES.small,
  }
});

export default styles;