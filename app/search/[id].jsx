import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { COLORS, SIZES, icons } from '../../constants';
import { NearbyJobCard, ScreenHeaderBtn } from '../../components';
import { API_KEY } from '../../hook/useFetch';
import SearchHeader from '../../components/home/search/SearchHeader';
import SearchFooter from '../../components/home/search/SearchFooter';
import axios from 'axios';

const JonSearchResult = () => {

  const params = useLocalSearchParams();
  const router = useRouter();

  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [curPage, setCurPage] = useState(1);

  const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult([]);

    try {
      const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': "jsearch.p.rapidapi.com",
        },
        params: {
          query: params.id,
          page: curPage.toString(),
        },
      }

      const { data } = await axios.request(options);
      setSearchResult(data?.data || null);

    } catch (error) {
      setSearchError(error);
      console.log(error);

    } finally {
      setSearchLoader(false);
    }
  }

  const handlePagination = (direction) => {
    if (direction === 'left' && curPage > 1) {
      setCurPage(prev => prev - 1);
      handleSearch();
    } else if (direction === 'right') {
      setCurPage(prev => prev + 1);
      handleSearch();
    }    
  }

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen 
        options={{
          headerStyle: styles.screenHeader,
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn 
              iconUrl={icons.left}
              isFull={false}
              handlePress={() => router.back()}
            />
          ),
          headerTitle: ''
        }}
      />

      <FlatList 
        data={searchResult}
        keyExtractor={item => item.job_id}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item }) => (
          <NearbyJobCard 
            job={item}
            handleCardPress={() => router.push(`/job-details/${item.job_id}`)}
          />
        )}
        ListHeaderComponent={() => (
          <SearchHeader 
            paramsId={params?.id} 
            searchLoader={searchLoader} 
            searchError={searchError} 
          />
        )}
        ListFooterComponent={() => (
          <SearchFooter 
            curPage={curPage}
            handlePagination={handlePagination}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default JonSearchResult;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  screenHeader: {
    backgroundColor: COLORS.lightWhite
  },
  contentContainerStyle: {
    padding: SIZES.medium,
    rowGap: SIZES.medium
  }
});