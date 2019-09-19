import React from 'react';
import { Button, View, Text } from 'react-native';
import LoginForm from './LoginForm';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { Dispatch } from 'redux';
// import { LoginFormValues } from '../../../../shared/interfaces/loginFormValues';
// import { Actions } from '../../../../store/auth/actions';
// import LoginForm from './LoginForm';
// import { useStyles } from './style';


const LoginScreen: React.FC = () => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <LoginForm />
      <Button
        title="Go to Registration"
        onPress={() => this.props.navigation.navigate('Registration')}
      />
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


