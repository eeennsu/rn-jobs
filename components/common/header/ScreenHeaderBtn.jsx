import { TouchableOpacity, Image } from 'react-native';
import styles from './screenheader.style';

const ScreenHeaderBtn = ({ iconUrl, isFull, handlePress }) => {

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} resizeMode='cover' style={isFull ? styles.btnImageFull : styles.btnImg} />
    </TouchableOpacity>
  );
}

export default ScreenHeaderBtn;