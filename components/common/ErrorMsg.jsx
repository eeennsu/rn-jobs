import { Text } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const ErrorMsg = ({ msg = 'Something went to wrong' }) => {

  return (
    <Text style={{
      textAlign: 'center',
      color: COLORS.red,
      paddingVertical: SIZES.large
    }}>
      {msg}
    </Text>
  )
}

export default ErrorMsg;