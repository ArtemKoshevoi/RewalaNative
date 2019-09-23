import React from 'react';
import { Button, View, Text, Alert } from 'react-native';
import { NavigationScreenProps } from "react-navigation";
import LoginForm from './LoginForm';
import { Field, Formik, FormikProps } from 'formik';
import { LoginFormValues } from '../../../../shared/interfaces/loginFormValues';
import { required } from '../../../../shared/validators/required';
import { email } from '../../../../shared/validators/email';
import { CommonTextField } from '../../../../shared/components/CommonTextField';
import {style} from './style';
// import LoginForm from './LoginForm';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { Dispatch } from 'redux';
// import { LoginFormValues } from '../../../../shared/interfaces/loginFormValues';
// import { Actions } from '../../../../store/auth/actions';
// import LoginForm from './LoginForm';
// import { useStyles } from './style';

type Props =
  & NavigationScreenProps<{}>
  ;

const LoginScreen: React.FC<Props> = ({ navigation }) => {

  const openRegistration= () => {
    navigation.navigate('Registration');
  };

  const Submit = ({email, password}: LoginFormValues) => {
    console.log({email, password});
  };
  return (
      <View style={style.rootContainer}>
        <Formik initialValues={{email: '', password: ''}} onSubmit={Submit}>
          {(FormikProps) => (
            <View>
              <Field
                name='email'
                component={CommonTextField}
                placeholder='Email'
                validate={[required, email]}
                inputContainerStyle={style.inputContainer}
              />
              <Field
                name='password'
                component={CommonTextField}
                placeholder='Password'
                validate={[required]}
                inputContainerStyle={style.inputContainer}
              />
              <View style={style.buttonWrapper}>
                <Button
                  title={'sign in'}
                  onPress={FormikProps.handleSubmit}/>
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

export default LoginScreen;

//
// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   login: (loginFormValues: LoginFormValues) => dispatch(Actions.login(loginFormValues)),
// });
//
// type Props =
//   & ReturnType<typeof mapDispatchToProps>;
//
// const Login: React.FC<Props> = ({login}) => {
//   const classes = useStyles();
//   const Submit = ({email, password}: LoginFormValues) => {
//     login({email, password});
//   };
//   return (
//     <Container maxWidth={'xs'}>
//       <LoginForm onSubmit={Submit}/>
//       <Grid container={true} className={classes.grid}>
//         <Grid item={true} xs={true}>
//           <Link to='#'>
//             Forgot password?
//           </Link>
//         </Grid>
//         <Grid item={true}>
//           <Link to='/registration'>
//             {'Don\'t have an account? Sign Up'}
//           </Link>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };
//
// export default connect(null, mapDispatchToProps)(Login);


