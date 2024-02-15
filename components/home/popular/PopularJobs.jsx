import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import styles from './popularJobs.style';
import useFetch from '../../../hook/useFetch';
import ErrorMsg from '../../common/ErrorMsg';
import ContentHeader from '../../common/content/ContentHeader';

const PopularJobs = () => {

  const router = useRouter();
  const { datas, error, isLoading, refetch } = useFetch('/search', { 
    query: 'React developer', 
    num_pages: '1' 
  });

  return (
    <View style={styles.container}>
      <ContentHeader headerTitle='Popular Jobs' />

      <View style={styles.cardsContainer}>
        {
          isLoading ?  (
            <ActivityIndicator  size='large' color={COLORS.primary} /> 
          ) : error ? (
            <ErrorMsg>
              Something went to wrong
            </ErrorMsg>
          ) : (
            <FlatList 
              data={datas}
              keyExtractor={item => item?.job_id}
              contentContainerStyle={{ columnGap: SIZES.medium }}
              horizontal
              renderItem={({ item }) => (
                <PopularJobCard 
                  job={item}
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