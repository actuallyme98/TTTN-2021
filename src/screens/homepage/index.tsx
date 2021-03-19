import React from 'react';
import { connect } from 'react-redux';

import styles from './styles';

import { CometChatUI } from '../../components';

interface Props {
  isLoggedIn: boolean;
  navigation: any;
  dispatch: any;
}

const HomePage = (props: Props) => {
  if (!props.isLoggedIn) {
    props.navigation.navigate('LoginPage');
  }

  return <CometChatUI />;
};

const mapStateToProps = ({ reducer }: any) => {
  return {
    loading: reducer.loading,
    error: reducer.error,
    isLoggedIn: reducer.isLoggedIn,
  };
};

export default connect(mapStateToProps)(HomePage);
