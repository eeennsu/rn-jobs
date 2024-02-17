import { View, Text, Image, TouchableOpacity } from 'react-native';
import { basicLogo, checkImageUrl } from '../../../../utils/util.image';
import styles from './popularJobCard.style';

const PopularJobCard = ({ job, selectedJobId, handlePressCard }) => {

  const jobId = job?.job_id || '';

  return (
    <TouchableOpacity 
      activeOpacity={0.4}
      style={styles.container(selectedJobId, jobId)}
      onPress={() => handlePressCard(jobId)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJobId, jobId)}>
        <Image 
          source={{ 
            uri: checkImageUrl(job?.employer_logo) ? job.employer_logo : basicLogo 
          }}
          style={styles.logoImage}
          resizeMode='contain'
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {job?.employer_name || '-'}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJobId, jobId)} numberOfLines={1}>
          {job?.job_title || '-'}
        </Text>
        <Text style={styles.location}>
          {job?.job_country || '-'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default PopularJobCard;