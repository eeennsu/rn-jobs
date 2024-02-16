import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { icons } from '../../../constants';
import { basicLogo, checkImageUrl } from '../../../utils/util.image';
import { dateFormat } from '../../../utils/util.time';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './company.style';

const Company = ({ companyLogo, jobTitle, companyType, location, jobLink, postedDate, expireDate }) => {

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          style={styles.logoImage} 
          source={{
            uri: checkImageUrl(companyLogo) ? companyLogo : basicLogo
          }}
        />
      </View>  

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>
          {jobTitle}
        </Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyType}>
          {companyType}
        </Text>
        <View style={styles.locationBox}>
          <Image 
            style={styles.locationImage}
            source={icons.location} 
          />
          <Text style={styles.locationName}>
            {location}  
          </Text>
        </View>
        <TouchableOpacity onPress={() => Linking.openURL(jobLink)}>
          <Image 
            style={styles.linkImage}
            source={icons.link} 
          />
        </TouchableOpacity>
      </View>    
      <View style={styles.dateFormatBox}>
        <Icon name='update' size={16} />
        <Text style={styles.updateIcon}>        
          {dateFormat(postedDate)}
        </Text>
      </View>
      <View style={styles.dateFormatBox}>
        <Icon name='update-disabled' size={16} />
        <Text style={styles.updateIcon}>        
          {dateFormat(expireDate)}
        </Text>
      </View>
    </View>
  );
}

export default Company;