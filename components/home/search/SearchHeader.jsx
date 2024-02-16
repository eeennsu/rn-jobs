import { View, Text, ActivityIndicator } from 'react-native';
import { COLORS } from '../../../constants';
import ErrorMsg from '../../common/ErrorMsg';
import styles from './search.style';

const SearchHeader = ({ paramsId, searchLoader, searchError }) => {

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.searchTitle}>
          {paramsId}
        </Text>
        <Text style={styles.noOfSearchedJobs}>
          Job Opportunities
        </Text>
        <View style={styles.loaderContainer}>
          {
            searchLoader ? (
              <ActivityIndicator size='large' color={COLORS.primary} />
            ) :searchError && (
              <ErrorMsg />           
            )
          }
        </View>
      </View>
    </>
  );
}

export default SearchHeader;