import React, { useEffect, useState } from 'react';
import { CometChatManager } from '../../../utils/controller';
import { CometChatAvatar } from '../../Shared';
import styles from './styles';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import theme from '../../../theme';

import * as actions from '../../../redux/actions/app-action';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { logger } from '../../../utils/common';
import { connect } from 'react-redux';

const notificationIcon = <Icon name="notifications" size={28} />;
const privacyIcon = <Icon name="security" size={28} />;
const chatIcon = <Icon name="chat" size={28} />;
const helpIcon = <Icon name="help" size={28} />;
const problemIcon = <Icon name="report-problem" size={28} />;

const CometChatUserProfile = (props: any) => {
  const [user, setUser] = useState({ name: '', avatar: null });
  const viewTheme = { ...theme, ...props.theme };

  /**
   * Retrieve logged in user details
   * @param
   */
  const getProfile = () => {
    new CometChatManager()
      .getLoggedInUser()
      .then((loggedInUser: any) => {
        setUser(loggedInUser);
      })
      .catch((error) => {
        logger('[CometChatUserProfile] getProfile getLoggedInUser error', error);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const avatar = (
    <View style={styles.avatarStyle}>
      <CometChatAvatar
        cornerRadius={18}
        borderColor={viewTheme.color.secondary}
        borderWidth={1}
        image={{ uri: user.avatar }}
        name={user.name}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.userInfoScreenStyle}>
      <View style={styles.headingContainer}>
        <Text style={styles.headerTitleStyle}>More</Text>
      </View>
      <View style={styles.userContainer}>
        <View style={styles.avatarContainer}>{avatar}</View>
        <View style={styles.userDetailsContainer}>
          <View>
            <Text style={styles.userName}>{user.name}</Text>
          </View>
          <Text style={styles.status}>Online</Text>
        </View>
      </View>
      <View style={styles.infoItemsWrapper}>
        <View style={styles.infoItemHeadingContainer}>
          <Text style={styles.infoItemHeadingText}>Preferences</Text>
        </View>
        <View style={styles.infoItemsContainer}>
          <View style={styles.infoItem}>
            {notificationIcon}
            <Text style={styles.infoItemText}>Notifications</Text>
          </View>
          <View style={styles.infoItem}>
            {privacyIcon}
            <Text style={styles.infoItemText}>Privacy and Security</Text>
          </View>
          <View style={styles.infoItem}>
            {chatIcon}
            <Text style={styles.infoItemText}>Chats</Text>
          </View>
        </View>
        <View style={styles.infoItemHeadingContainer}>
          <Text style={styles.infoItemHeadingText}>Other</Text>
        </View>
        <View style={styles.infoItemsContainer}>
          <View style={styles.infoItem}>
            {helpIcon}
            <Text style={styles.infoItemText}>Help</Text>
          </View>
          <View style={styles.infoItem}>
            {problemIcon}
            <Text style={styles.infoItemText}>Report a Problem</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.logoutBtn} onPress={() => props.dispatch(actions.logout())}>
          <Text style={styles.btnText}>????ng xu???t</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default connect()(CometChatUserProfile);
