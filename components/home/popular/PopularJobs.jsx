import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import styles from './popularJobs.style';
import useFetch from '../../../hook/useFetch';
import ErrorMsg from '../../common/ErrorMsg';
import ContentHeader from '../../common/content/ContentHeader';

const PopularJobs = ({ data, isLoading, error }) => {

  const router = useRouter();

  const [selectedJobId, setSelectedJobId] = useState(null);

  const handleCardPress = (jobId) => {
    router.push(`/job_detail/${jobId}`);
    setSelectedJobId(jobId);
  }

  return (
    <View style={styles.container}>
      <ContentHeader headerTitle='Popular Jobs' />

      <View style={styles.cardsContainer}>
        {
          isLoading ?  (
            <ActivityIndicator  size='large' color={COLORS.primary} /> 
          ) : error ? (
            <ErrorMsg />  
          ) : (
            <FlatList 
              data={data}
              keyExtractor={item => `popular-job-${item?.job_id}`}
              contentContainerStyle={{ columnGap: SIZES.medium }}
              horizontal
              renderItem={({ item }) => (
                <PopularJobCard 
                  job={item}
                  handlePressCard={handleCardPress}
                />
              )}
            />
          )
        }
      </View>
    </View>
  );
}

export default PopularJobs;