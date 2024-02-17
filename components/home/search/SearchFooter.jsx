import { View, Text, Image, TouchableOpacity } from 'react-native';
import { icons } from '../../../constants';
import styles from './search.style';

const SearchFooter = ({ handlePagination, curPage }) => {

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={styles.paginationButton}
        activeOpacity={0.5}
        onPress={() => handlePagination('left')}
      >
        <Image 
          source={icons.chevronLeft}
          style={styles.paginationImage}
        />
      </TouchableOpacity>
      <View style={styles.paginationTextBox}>
        <Text style={styles.paginationText}>
          {curPage}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.paginationButton}
        activeOpacity={0.5}
        onPress={() => handlePagination('right')}
      >
        <Image 
          source={icons.chevronRight}
          style={styles.paginationImage}
        />
      </TouchableOpacity>
    </View>
  );
}

export default SearchFooter;