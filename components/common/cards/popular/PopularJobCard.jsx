import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './popularJobCard.style';

const PopularJobCard = ({ item, selectedJob, handlePressCard }) => {

  const jobId = item?.jobId || '';

  return (
    <TouchableOpacity 
      activeOpacity={0.4}
      style={styles.container(selectedJob, jobId)}
      onPress={() => handlePressCard(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, jobId)}>
        <Image 
          source={{ uri: item?.employer_logo }}
          style={styles.logoImage}
          resizeMode='contain'
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item?.employer_name || '-'}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, jobId)} numberOfLines={1}>
          {item?.job_title || '-'}
        </Text>
        <Text style={styles.location}>
          {item?.job_country || '-'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default PopularJobCard;