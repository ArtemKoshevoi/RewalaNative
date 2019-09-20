import styles from "./styles";
import React, { Component } from "react";
import { View } from "react-native";
import { Button, Input } from "react-native-elements";
import { NavigationScreenProp } from "react-navigation";

interface Props {
  navigation: NavigationScreenProp<any, any>
}

class LoginForm extends Component<Props, object> {
  renderForm = () => (
    <View style={styles.container}>
      <Input
        placeholder='Email'
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input placeholder='Password' secureTextEntry autoCapitalize="none" />
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