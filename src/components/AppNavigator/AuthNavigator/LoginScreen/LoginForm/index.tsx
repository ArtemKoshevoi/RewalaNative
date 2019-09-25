import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';
import { style } from '../style';
import styles from './styles';

interface Props {
  navigation: NavigationScreenProp<any, any>
}

class LoginForm extends Component<Props, object> {
  renderForm = () => (
    <View style={styles.container}>
      <Input
        placeholder='Email'
        keyboardType='email-address'
        autoCapitalize='none'
        // containerStyle={style.container}
      />
      <Input placeholder='Password' secureTextEntry={true} autoCapitalize='none' />
      <Button
        title='Log In'
        containerStyle={styles.loginButtonContainer}
        buttonStyle={styles.loginButton}
        disabledStyle={styles.disabled}
        titleStyle={styles.loginButtonTitle}
        disabledTitleStyle={styles.loginButtonTitle}
      />
    </View>
  );

  render() {
    return this.renderForm();
  }
}

export default LoginForm;