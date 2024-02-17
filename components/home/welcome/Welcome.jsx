import { View, Text, TextInput, TouchableOpacity, Image, FlatList, Touchable } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { SIZES, icons ,jobs } from '../../../constants';
import styles from './welcome.style';

const Welcome = ({ searchTerm, setSearchTerm, handleSearchClick }) => {

  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>
          Hello Eunsu!
        </Text>
        <Text style={styles.welcomeMessage}>
          Find your project job
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity 
          style={styles.searchBtn} 
          activeOpacity={0.45} 
          onPress={handleSearchClick}
        >
          <Image 
            source={icons.search}       
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobs} 
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={activeJobType === item ? styles.activityTab : styles.basicTab}
              activeOpacity={0.5}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={activeJobType === item ? styles.activityTabText : styles.basicTabText}>
                {item}
              </Text>
            </TouchableOpacity>
          )}  
        />
      </View>
    </View>
  );
}

export default Welcome;