import React from 'react';
import { Button, View, Text, Alert } from 'react-native';
import { NavigationScreenProps } from "react-navigation";
import LoginForm from './LoginForm';
import { Field, Formik, FormikProps } from 'formik';
import { LoginFormValues } from '../../../../shared/interfaces/loginFormValues';
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

  const Submit = ({email, password}: LoginFormValues) => {
    Alert({email, password});
  };
  return (
      <Formik initialValues={{email: '', password: ''}} onSubmit={Submit}>
        {(FormikProps) => (
          <View>
            <Text>
              Login form
            </Text>
            <Button title={'Log in'} onPress={FormikProps.handleSubmit}/>
          </View>
        )}
      </Formik>
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


