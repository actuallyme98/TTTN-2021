import { StackNavigationProp } from '@react-navigation/stack';

export interface IScreenProps {
  setHudVisible?(visible: boolean): void;
  showAlert?(mess: string): void;
}

export interface IBaseProps {
  navigation?: StackNavigationProp<any>;
  screenProps?: IScreenProps;
  route?: any;
}
