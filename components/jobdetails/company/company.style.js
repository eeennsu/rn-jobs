import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONT } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBox: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: SIZES.large,
  },
  logoImage: {
    width: '100%',
    height: '100%'
  },
  jobTitleBox: {
    marginTop: SIZES.small
  },
  jobTitle: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.bold,
    textAlign: 'center'
  },
  companyInfoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SIZES.large
  },
  companyType: {
    fontSize: SIZES.medium - 2,
    color: COLORS.primary,
    fontFamily: FONT.medium
  },
  locationBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  locationImage: {
    width: 14,
    height: 14,
    tintColor: COLORS.gray,
    resizeMode: 'contain'
  },
  locationName: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: 2
  },
  linkImage: {
    width: 20,
    height: 20
   },
  dateFormatBox: {
    flexDirection: 'row',
    width: '48%',
    alignItems: 'center',
    marginTop: SIZES.small,
    gap: SIZES.small,
    justifyContent: 'space-between'
  },
  dateFormat: {
    fontSize: SIZES.small,
    color: COLORS.gray,
    fontFamily: FONT.regular,
  },
});

export default styles;