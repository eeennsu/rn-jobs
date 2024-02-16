import { View, Text } from 'react-native';
import styles from './specifics.style';

const Specific = ({ content }) => {

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.contentDot} />
      <Text style={styles.contentText}>
        {content}
      </Text>   
    </View>
  );
}

export default Specific;