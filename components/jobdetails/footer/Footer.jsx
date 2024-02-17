import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { icons, setPreparing } from '../../../constants';
import styles from './footer.style';

const Footer = ({ googleLink }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.likeBtn}
        onPress={setPreparing}
      >
        <Image 
          style={styles.likeImage}
          source={icons.heart}
        />
      </TouchableOpacity>   
      <TouchableOpacity 
        style={styles.applyBtn}
        onPress={() => Linking.openURL(googleLink)}
        activeOpacity={0.8}
      >
        <Text style={styles.applyBtnText}>
          Apply
        </Text>
      </TouchableOpacity> 
    </View>
  );
}

export default Footer;