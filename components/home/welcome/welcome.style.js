import { StyleSheet } from 'react-native';
import { COLORS, FONT, SHADOWS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: SIZES.xLarge,
    height: 50
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.medium,
    height: '100%'
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: '100%',
    height: '100%',
    paddingHorizontal: SIZES.medium
  },
  searchBtn: {
    width: 50,
    height: '100%',
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBtnImage: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: '100%',
    marginTop: SIZES.medium
  },
  basicTab: {
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.large,
    borderWidth: 1,
    borderColor: COLORS.gray2
  },
  activityTab: {
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.large,
    backgroundColor: 'black',
    ...SHADOWS.medium
  },
  basicTabText: {
    fontFamily: FONT.medium,
    color: COLORS.gray2
  },
  activityTabText: {
    fontFamily: FONT.medium,
    color: COLORS.white
  },
});

export default styles;