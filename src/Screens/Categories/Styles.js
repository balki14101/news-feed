import {StyleSheet} from 'react-native';
//Import Dimensions
import {Height, Width} from '../../Helper/Dimensions';
import colors from '../../Helper/Colors';
import {
  FONT_SIZE_SMALL,
  FONT_SIZE_NORMAL,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_LARGE,
} from '../../Helper/FontSize';

const Styles = StyleSheet.create({
  card: {
    // flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    margin: 8,
    borderRadius: 10,
    // width: Width,
  },
  image: {
    width: Width / 3,
    height: Height / 7,
    borderRadius: 8,
  },
  contentView: {
    // backgroundColor: 'red',
    // marginRight: 120,
    padding: 8,
    width: Width / 1.6,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateText: {
    alignSelf: 'flex-end',
    fontSize: FONT_SIZE_SMALL,
    marginTop: 8,
    color: colors.Grey,
  },
});
export default Styles;
