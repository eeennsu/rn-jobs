import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

const ContentHeader = ({ headerTitle, handleShowAll }) => {

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Text style={{
        fontSize: SIZES.large,
        fontFamily: FONT.medium,
        color: COLORS.primary,
      }}>
        {headerTitle}
      </Text>
      <TouchableOpacity activeOpacity={0.45}>
        <Text style={{
          fontSize: SIZES.small,
          fontFamily: FONT.medium,
          color: COLORS.gray
        }} onPress={handleShowAll}>
          Show All
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ContentHeader;