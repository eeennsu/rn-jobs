import { StyleSheet } from 'react-native';
import { COLORS, FONT, SHADOWS, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
  container: (selectedJob, jobId) => ({
    width: 250,
    padding: SIZES.xLarge,
    backgroundColor: selectedJob === jobId ? COLORS.primary : '#FFF',
    borderRadius: SIZES.medium,
    justifyContent: 'space-between',
    ...SHADOWS.medium,
    shadowColor: COLORS.white, 
  }),
  logoContainer: (selectedJob, jobId) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === jobId ? '#FFF' : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  logoImage: {
    width: '80%',
    height: '80%',
    borderRadius: 20
  },
  companyName: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: '#B3AEC6',
    marginTop: SIZES.small / 1.5
  },
  infoContainer: {
    marginTop: SIZES.large
  },
  jobName: (selectedJob, jobId) => ({
    fontSize: SIZES.large - 2,
    fontFamily: FONT.medium,
    color: selectedJob === jobId ? COLORS.white : COLORS.primary
  }),
  infoWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  publisher: (selectedJob, jobId) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: selectedJob === jobId ? COLORS.white : COLORS.primary
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: '#B3AEC6'
  }
});

export default styles;