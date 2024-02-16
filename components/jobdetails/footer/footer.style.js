import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.large,
    paddingVertical: SIZES.medium,
    gap: SIZES.small,
    borderTopColor: COLORS.gray2,
    borderTopWidth: 0.2,
    backgroundColor: "#FFF",
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  likeBtn: {
    borderRadius: 30,
    padding: SIZES.large,
    borderWidth: 0.4,
    borderColor: COLORS.gray,
    width: 54,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  likeImage: {
    width: '200%',
    height: '200%',
    resizeMode: 'contain',
    tintColor: "#F37453",
  },
  applyBtn: {
    flex: 1,
    backgroundColor: "#FE7654",
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
  },
  applyBtnText: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontFamily: FONT.bold,
  }
  // timeWrapper: {
  //   alignItems: 'center',
  //   gap: SIZES.small,
  //   flexDirection: 'row'
  // },
  // timeTitle: {
  //   fontSize: SIZES.small,
  //   fontWeight: '400'
  // },
  // timeText: {
  //   fontWeight: '800',
  //   fontSize: SIZES.medium,
  //   fontStyle: 'italic'
  // }
});

export default styles;