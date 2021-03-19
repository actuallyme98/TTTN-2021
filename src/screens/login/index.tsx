import React from 'react';
import { connect } from 'react-redux';
import { CometChatAvatar } from '../../components';
import { COMETCHAT_CONSTANTS } from '../../../CONST';
import style from './styles';
import * as actions from '../../redux/actions/app-action';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native';

interface IProps {
  dispatch: any;
  isLoggedIn: boolean;
  navigation: any;
  loading: boolean;
  error: any;
}

interface IState {
  uid: string;
}

class LoginPage extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      uid: '',
    };
  }

  login = (uid?: string) => {
    if (!uid) {
      uid = this.state.uid;
    }
    this.props.dispatch(actions.auth(uid, COMETCHAT_CONSTANTS.AUTH_KEY));
  };

  componentDidUpdate() {
    if (this.props.isLoggedIn) {
      this.props.navigation.navigate('HomePage');
    }
  }

  render() {
    let loader = null;

    if (this.props.loading) {
      loader = (
        <View style={style.loaderContainer}>
          <ActivityIndicator size="large" color="white" />
        </View>
      );
    }

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <Text style={style.errorStyle}>{this.props.error.message}</Text>;
    }

    return (
      <SafeAreaView>
        {loader}
        <View style={style.wrapperStyle}>
          {errorMessage}
          <Text style={style.titleStyle}>ACTUALLY ME Chat</Text>
          <Text style={style.subtitleStyle}>Quick login</Text>
          <View style={style.userContainerStyle}>
            <TouchableOpacity
              style={style.userWrapperStyle}
              onPress={() => this.login('superhero1')}
            >
              <View style={style.thumbnailWrapperStyle}>
                <CometChatAvatar
                  image={{
                    uri: 'https://data-us.cometchat.io/assets/images/avatars/ironman.png',
                  }}
                />
              </View>
              <Text style={style.btnText}>superhero1</Text>
            </TouchableOpacity>
          </View>
          <View style={style.uidWrapperStyle}>
            <View style={style.inputWrapperStyle}>
              <TextInput
                style={style.textInput}
                // ref={this.myRef}
                onChangeText={(value) => {
                  this.setState({ uid: value });
                }}
                placeholder="Phone number"
              />
            </View>
            <TouchableOpacity style={style.loginBtn} onPress={() => this.login()}>
              <Text style={style.btnText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ reducer }: any) => {
  return {
    loading: reducer.loading,
    error: reducer.error,
    isLoggedIn: reducer.isLoggedIn,
  };
};

export default connect(mapStateToProps)(LoginPage);
