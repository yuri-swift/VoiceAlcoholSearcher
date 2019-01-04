import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  contents: {
    padding: 16,
    justifyContent: 'center',
  },
  sake: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 32,
  },
  icon: {
    width: 36,
    height: 36,
    marginRight: 16,
  },
  row: {
    flexDirection: 'row',
  },
  starContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 30,
    height: 50,
  },
  textInputContainer: {
    height: 200,
    marginBottom: 32,
    // backgroundColor: 'blue'
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    borderColor: 'gray',
    borderWidth: 0.25,
    borderRadius: 4,
    padding: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryBtn: {
    marginVertical: 8,
    width: 280,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seondaryBtn: {
    marginVertical: 8,
    width: 280,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryBtnTxt: {
    fontSize: 16,
    color: 'white', 
    fontWeight: '600',
  },
  seondaryBtnTxt: {
    fontSize: 16,
    color: 'black', 
    fontWeight: '600',
  },
});

export default styles;