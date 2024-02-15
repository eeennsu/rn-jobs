import { useRouter } from 'expo-router';
import { View, Text } from 'react-native';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { COLORS } from '../../../constants';
import useFetch from '../../../hook/useFetch';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import styles from './nearbyJobs.style';
import ErrorMsg from '../../common/ErrorMsg';
import ContentHeader from '../../common/content/ContentHeader';

const NearbyJobs = () => {

  const router = useRouter();
  const { datas, isLoading, error, refetch } = useFetch('/search', {
    query: 'React Native developer',
    num_pages: '1'
  });

  return (
    <View>
      <ContentHeader headerTitle='Nearby Jobs' />

      <View style={styles.cardsContainer}>
        {
          isLoading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
          ) : error ? (
            <ErrorMsg>
              Something went to wrong
            </ErrorMsg>
          ) : (
            datas.map((job) => (
              <NearbyJobCard
                key={`nearby-job-${job.job_id}`}
                job={job}
                handleNavigate={() => {
                  router.push(`/job-details/${job.job_id}`);
                }}
              />
            ))
          )
        }
      </View>
    </View>
  );
}

export default NearbyJobs;