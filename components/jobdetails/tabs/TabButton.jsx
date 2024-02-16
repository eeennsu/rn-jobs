import { TouchableOpacity, Text } from 'react-native';
import styles from './tabs.style';

const TabButton = ({ tabName, activeTab, handleTab }) => {

  return (
    <TouchableOpacity 
      style={styles.btn(tabName, activeTab)}
      onPress={handleTab}
      activeOpacity={0.7}
    >
      <Text style={styles.btnText(tabName, activeTab)}>
        {tabName}
      </Text>
    </TouchableOpacity>
  );
}

export default TabButton;