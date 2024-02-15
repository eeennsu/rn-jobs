import { StyleSheet } from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: SIZES.small,
    paddingVertical: SIZES.xSmall,
    paddingHorizontal: SIZES.xxSmall,
    gap: SIZES.xSmall,
    ...SHADOWS.xSmall,
  },
  logoContainer: {
    padding: SIZES.xxSmall,  
  },
  logoImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    ...SHADOWS.medium
  },
  contentBox: {
    flex: 1
  },
  jobTitle: {
    fontWeight: '600',
    fontFamily: "DMBold",
  },
  subTitle: {
    marginTop: SIZES.xxSmall,
    color: COLORS.gray2,
    fontSize: SIZES.xSmall,
    fontFamily: "DMRegular",
    textTransform: "capitalize",
  }
});

export default styles;