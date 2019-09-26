import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

type Props =
  & NavigationScreenProps<{}>
  ;

const RegistrationScreen: React.FC<Props> = ({ navigation }) => {

  const openLogin= () => {
    navigation.navigate('LoginScreen');
  };


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Registration Screen</Text>
      <Button
        title='Go to Login'
        onPress={openLogin}
      />
    </View>
  );
};

export default RegistrationScreen;