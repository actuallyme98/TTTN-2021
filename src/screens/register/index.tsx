import React, { useCallback, useState } from 'react';
import { COMETCHAT_CONSTANTS } from '../../../CONST';
import styles from './styles';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { CometChat } from '@cometchat-pro/react-native-chat';

interface Props {
  navigation: any;
  dispatch: any;
}

const RegisterPage = (props: Props) => {
  const { navigation } = props;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const login = useCallback(() => {
    navigation.navigate('LoginPage');
  }, []);

  const onChangeName = useCallback((text: string) => {
    setName(text);
  }, []);
  const onChangePhone = useCallback((text: string) => {
    setPhone(text);
  }, []);

  const register = useCallback(async () => {
    if (!/^0[1-9]{1}(\-)?[^0\D]{1}\d{7}$/.test(phone)) {
      setError('Invalid phone');
      return;
    }
    const user = new CometChat.User({});
    user.setUid(phone);
    user.setName(name);
    try {
      await CometChat.createUser(user, COMETCHAT_CONSTANTS.AUTH_KEY);
      setError('Register successfully');
    } catch (err) {
      setError(String(err.message || err));
    }
  }, [phone, name]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Register</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          onChangeText={onChangeName}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Phone number"
          placeholderTextColor="#003f5c"
          onChangeText={onChangePhone}
        />
      </View>
      {!!error && <Text style={styles.errorStyle}>{error}</Text>}
      <TouchableOpacity style={styles.loginBtn} onPress={register}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText} onPress={login}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterPage;
