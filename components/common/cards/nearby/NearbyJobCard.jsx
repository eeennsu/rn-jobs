import { View, Text, TouchableOpacity, Image } from 'react-native';
import { basicLogo, checkImageUrl } from '../../../../utils/util.image';
import styles from './nearbyJobCard.style';

const NearbyJobCard = ({ job, handleNavigate }) => {
  console.log(job);
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={handleNavigate} 
      activeOpacity={0.5}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image 
          style={styles.logoImage}
          source={{ uri: checkImageUrl(job?.employer_logo) 
            ? job?.employer_logo
            : basicLogo }} 
          resizeMode='contain'
        />
      </TouchableOpacity>

      <View style={styles.contentBox}>
        <Text style={styles.jobTitle} numberOfLines={1}>
          {job?.job_title}
        </Text>
        <Text style={styles.subTitle}>
          {job?.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default NearbyJobCard;

