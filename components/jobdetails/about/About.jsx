import { View, Text } from 'react-native';
import styles from './about.style';

const About = ({ desc }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>
        About The Job
      </Text>
      <View style={styles.descBox}>
        <Text style={styles.descText}>
          {desc}
        </Text>
      </View>
    </View>
  );
}

export default About;