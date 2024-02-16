import { View, Text } from 'react-native';
import styles from './specifics.style';
import Specific from './Specific';

const Specifics = ({ title, contents }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>

      <View style={styles.contentContainer}>
        {
          Array.isArray(contents) && contents.map((content, i) => (
            <Specific key={content + i} content={content} />
          ))
        }
      </View>
    </View>
  );
}

export default Specifics;