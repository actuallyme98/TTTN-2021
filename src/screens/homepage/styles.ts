import { StyleSheet } from 'react-native';

import { Dimensions } from 'react-native';

const dheight = Dimensions.get('window').height;
const dwidth = Dimensions.get('window').width;

export const heightRatio = dheight / 667;
export const widthRatio = dwidth / 375;
export const calc = () => {
  return dheight - 100 * heightRatio;
};
export const calcWidth = (width: number) => {
  return dwidth - width * widthRatio;
};

export default StyleSheet.create({});
