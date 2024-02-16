import { StyleSheet } from 'react-native';
import { COLORS, FONT, SHADOWS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    paddingBottom: 20,
    marginBottom: SIZES.small / 2,
    paddingHorizontal: SIZES.xxSmall - 2,
    alignItems: 'center',
  },
  btn: (tabName, activeTab) => ({
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
    backgroundColor: tabName === activeTab ? COLORS.primary : '#F3F4F8',
    borderRadius: SIZES.xSmall,
    marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white
  }),
  btnText: (tabName, activeTab) => ({
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: tabName === activeTab ? '#FFF' : '#AAA9B8',
  })
});

export default styles;