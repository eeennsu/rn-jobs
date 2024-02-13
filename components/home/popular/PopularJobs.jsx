import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import styles from './popularJobs.style';
import useFetch from '../../../hook/useFetch';

const PopularJobs = () => {

  const router = useRouter();
  const { datas, error, isLoading, refetch } = useFetch('/search', { 
    query: 'React developer', 
    num_pages: '1' 
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Popular Jobs
        </Text>    
        <TouchableOpacity activeOpacity={0.45}>
          <Text style={styles.headerBtn}>
            Show All
          </Text>    
        </TouchableOpacity>           
      </View>

      <View style={styles.cardsContainer}>
        {
          isLoading ?  (
            <ActivityIndicator  size='large' color={COLORS.primary} /> 
          ) : error ? (
            <Text style={styles.errorMsg}>
              Something went to wrong
            </Text>
          ) : (
            <FlatList 
              data={datas}
              keyExtractor={item => item?.job_id}
              contentContainerStyle={{ columnGap: SIZES.medium }}
              horizontal
              renderItem={({ item }) => (
                <PopularJobCard 
                  item={item}
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