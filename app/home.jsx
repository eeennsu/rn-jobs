import { View, SafeAreaView, ScrollView, RefreshControl, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { NearbyJobs, PopularJobs, ScreenHeaderBtn, Welcome } from '../components';
import { COLORS, SIZES, icons, images } from '../constants';
import { useCallback, useState } from 'react';
import useFetch from '../hook/useFetch';

const Home = () => {

  const router = useRouter();
  
  const { data: firstData, error: firstError, isLoading: firstLoading, refetch: firstRefetch } = useFetch('/search', { 
    query: 'React developer', 
    num_pages: '1' 
  });

  const { data: secondData, isLoading: secondLoading, error: secondError, refetch: secondRefetch } = useFetch('/search', {
    query: 'React Native developer',
    num_pages: '1'
  });

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    firstRefetch();
    secondRefetch();
    setIsRefreshing(false);
  }, []);

  const handleSearchClick = () => {
    if (searchTerm) {
      router.push(`/search/${searchTerm}`);
    }
  }

  return (
    <SafeAreaView style={{ flex:1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen options={{ 
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={icons.menu} isFull={false} />
        ),
        headerRight: () => (
          <ScreenHeaderBtn iconUrl={images.profile} isFull={true} />
        ),
        headerTitle: ''
      }} />
      <ScrollView 
        showsVerticalScrollIndicator
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        >
        <View style={styles.container}>
          <Welcome 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearchClick={handleSearchClick}
          />        
          <View style={styles.wrapper}>
            <PopularJobs data={firstData} isLoading={firstLoading} error={firstError} />
            <NearbyJobs data={secondData} isLoading={secondLoading} error={secondError} />    
          </View>      
        </View>
      </ScrollView>      
    </SafeAreaView>
  );
}

export default Home;



const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: SIZES.medium 
  },
  wrapper: {
    marginTop: SIZES.xxLarge + 4,
    gap: SIZES.xxLarge + 6
  }
});