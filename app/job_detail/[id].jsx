import { View, Text, ActivityIndicator, RefreshControl, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { Stack, useRouter, search, useLocalSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components';
import { COLORS, icons, SIZES, tabs } from '../../constants';
import useFetch from '../../hook/useFetch';
import ErrorMsg from '../../components/common/ErrorMsg';

const JobDetails = () => {

  const params = useLocalSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch('/job-details', {
    job_id: params?.id,
  }, true);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    refetch();
    setIsRefreshing(false);
  }, []);

  const displayTabConect = () => {
    switch(activeTab) {
      case 'About': 
        return (
          <JobAbout desc={data[0]?.job_description || 'No data provided'} />
        );

      case 'Qualifications':       
        return (
          <Specifics 
            title='Qualifications' 
            contents={data[0]?.job_highlights.Qualifications || ['N/A']} 
          />
        );

      case 'Responsibilities': 
        return (
          <Specifics 
            title='Responsibilities'
            contents={data[0].job_highlights?.Responsibilities || ['N/A']}
          />
        );

      case 'Benefits': 
        return (
          <Specifics 
            title='Benefits'
            contents={data[0].job_highlights?.Benefits || ['N/A']}
          />
        );
    }
  }

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: COLORS.lightWhite
    }}>
      <Stack.Screen options={{
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerShadowVisible: false,
        headerBackVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn 
            iconUrl={icons.left}
            isFull={false}
            handlePress={() => router.back()}
          />
        ),
        headerRight: () => (
          <ScreenHeaderBtn 
            iconUrl={icons.share} 
            isFull={true} 
          />
        ),
        headerTitle: ''
      }} />       

      <>
        <ScrollView 
          showsVerticalScrollIndicator 
          refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }>
          {
            isLoading ? (
              <ActivityIndicator size='large' color={COLORS.primary} />
            ) : error ? (
              <ErrorMsg />
            ) : data?.length === 0 ? (
              <Text>No data</Text>
            ) : (
              <View style={styles.container}>
                <Company 
                  companyLogo={data[0]?.employer_logo}
                  jobTitle={data[0]?.job_title}
                  companyType={data[0]?.employer_company_type}
                  postedDate={data[0]?.job_posted_at_datetime_utc}
                  expireDate={data[0]?.job_offer_expiration_datetime_utc}
                  jobLink={data[0].job_google_link}
                  location={data[0]?.job_country}
                />
                
                <JobTabs 
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                
                {displayTabConect()}
              </View>
            )
          }
        </ScrollView>

        <JobFooter googleLink={data[0]?.job_google_link} />
      </>
    </SafeAreaView>
  );
}

export default JobDetails;



const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium,
    paddingBottom: 30
  }
});