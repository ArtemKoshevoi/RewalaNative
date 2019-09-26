import { Field, Formik } from 'formik';
import React from 'react';
import { Button, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CommonTextField } from '../../../../shared/components/CommonTextField';
import { LoginFormValues } from '../../../../shared/interfaces/loginFormValues';
import { email } from '../../../../shared/validators/email';
import { required } from '../../../../shared/validators/required';
import { Actions } from '../../../../store/auth/actions';
import { style } from './style';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (loginFormValues: LoginFormValues) => dispatch(Actions.login(loginFormValues)),
});

type Props =
  & NavigationScreenProps<{}>
  & ReturnType<typeof mapDispatchToProps>
  ;

const LoginScreen: React.FC<Props> = ({navigation, login}) => {

  const openRegistration = () => {
    navigation.navigate('RegistrationScreen');
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
              validate={required}
              inputContainerStyle={style.inputContainer}
              onChangeText={handleChange('email')}
              value={values.email}
              keyboardType='email-address'
              errorMessage={errors.email}
            />
            <Field
              name='password'
              secureTextEntry={true}
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

