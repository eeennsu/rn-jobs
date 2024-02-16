import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SIZES, tabs } from '../../../constants';
import styles from './tabs.style';
import TabButton from './TabButton';

const Tabs = ({ activeTab, setActiveTab }) => {

  return (
    <View style={styles.container}>
      <FlatList 
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        renderItem={({ item }) => (
          <TabButton
            tabName={item}
            activeTab={activeTab}
            handleTab={() => setActiveTab(item)}
          />
        )}
      />
    </View>
  );
}

export default Tabs;