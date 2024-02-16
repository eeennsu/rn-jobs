import { useRouter } from 'expo-router';
import { View, Text } from 'react-native';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { COLORS } from '../../../constants';
import useFetch from '../../../hook/useFetch';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import styles from './nearbyJobs.style';
import ErrorMsg from '../../common/ErrorMsg';
import ContentHeader from '../../common/content/ContentHeader';

const NearbyJobs = ({ data, isLoading, error }) => {

  const router = useRouter();

  const handleCardPress = (jobId) => {
    router.push(`/job_detail/${jobId}`);
  }

  return (
    <View>
      <ContentHeader headerTitle='Nearby Jobs' />

      <View style={styles.cardsContainer}>
        {
          isLoading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
          ) : error ? (
            <ErrorMsg />
          ) : (
            data.map((job) => (
              <NearbyJobCard
                key={`nearby-job-${job.job_id}`}
                job={job}
                handleCardPress={handleCardPress}
              />
            ))
          )
        }
      </View>
    </View>
  );
}

export default NearbyJobs;