import React, { useCallback, useEffect, useState } from 'react';
import { COMETCHAT_CONSTANTS } from '../../../CONST';
import styles from './styles';
import * as actions from '../../redux/actions/app-action';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

interface IProps {
  navigation: any;
}

const LoginPage = (props: IProps) => {
  const { navigation } = props;
  const [phone, setPhone] = useState('');
  const isLoggedIn = useSelector((store: any) => store.reducer.isLoggedIn);
  const loading = useSelector((store: any) => store.reducer.loading);
  const error = useSelector((store: any) => store.reducer.error);

  const dispatch = useDispatch();

  const login = useCallback(() => {
    dispatch(actions.auth(phone, COMETCHAT_CONSTANTS.AUTH_KEY));
  }, [phone]);

  const register = useCallback(() => {
    navigation.navigate('Register');
  }, []);

  const onChangePhone = useCallback((text: string) => {
    setPhone(text);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate('HomePage');
    }
  }, [isLoggedIn]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>React Native</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Phone number"
          placeholderTextColor="#003f5c"
          onChangeText={onChangePhone}
        />
      </View>
      {error && <Text style={styles.errorStyle}>{error.name || error.message || error}</Text>}
      <TouchableOpacity style={styles.loginBtn} onPress={login}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={register}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;
