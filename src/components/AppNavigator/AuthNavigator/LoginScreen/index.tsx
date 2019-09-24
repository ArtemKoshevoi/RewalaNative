import React from 'react';
import { Button, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Field, Formik } from 'formik';
import { LoginFormValues } from '../../../../shared/interfaces/loginFormValues';
import { required } from '../../../../shared/validators/required';
import { email } from '../../../../shared/validators/email';
import { CommonTextField } from '../../../../shared/components/CommonTextField';
import { style } from './style';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (loginFormValues: LoginFormValues) => dispatch(Actions.login(loginFormValues)),
});

type Props =
  & NavigationScreenProps<{}>
  & ReturnType<typeof mapDispatchToProps>
  ;

const LoginScreen: React.FC<Props> = ({navigation, login}) => {

  const openRegistration = () => {
    navigation.navigate('Registration');
  };

  const Submit = ({email, password}: LoginFormValues) => {
    login({email, password});
  };
  return (
    <View style={style.rootContainer}>
      <Formik initialValues={{email: '', password: ''}} onSubmit={Submit}>
        {({
            values,
            errors,
            status,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
          <View>
            <Field
              name='email'
              component={CommonTextField}
              placeholder='Email'
              validate={[required, email]}
              inputContainerStyle={style.inputContainer}
              onChangeText={handleChange('email')}
              value={values.email}
            />
            <Field
              name='password'
              component={CommonTextField}
              placeholder='Password'
              validate={required}
              inputContainerStyle={style.inputContainer}
              onChangeText={handleChange('password')}
              value={values.password}
            />
            <View style={style.buttonWrapper}>
              <Button
                title={'sign in'}
                onPress={handleSubmit}/>
            </View>
            <Button
              title="Don't have an account? Sign Up"
              onPress={openRegistration}
            />
          </View>
        )}
      </Formik>
    </View>

  );
};

export default connect(null, mapDispatchToProps)(LoginScreen);

