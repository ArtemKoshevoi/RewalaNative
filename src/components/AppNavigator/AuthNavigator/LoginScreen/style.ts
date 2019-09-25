import { StyleSheet } from 'react-native';

export const style = StyleSheet.create<StyleSheet.NamedStyles<any>>({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  inputContainer: {
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#0002',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.2,
    elevation: 2,
    marginBottom: 20,
  },
  container: {
    flex: 0,
    marginTop: 20,
    paddingHorizontal: 0,
  },
  buttonWrapper: {
    marginTop: 30,
    alignSelf: 'stretch',
    paddingBottom: 40,
  },
  btn: {
    paddingTop: 20,
    paddingBottom: 40,
  }
});
