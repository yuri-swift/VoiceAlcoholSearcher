import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 32,
    paddingVertical: 32,
  },
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  // header
  header: {
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 32,
  },
  degree: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 16,
    marginTop: 32,
  },
  degreeIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'gray',
    marginBottom: 16,
  },
  degreeTxt: {
    color: styleConstants.secondaryTxt,
  },
  summary: {
    flexDirection: 'row',
    marginTop: 8,
  },
  total: {
    flex: 1,
    alignItems: 'center',
  },
  badges: {
    flex: 1,
    alignItems: 'center',
  },
  num: {
    fontSize: 50,
    color: styleConstants.primaryTxt,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 12,
    color: styleConstants.hintTxt,
  },
  // category
  category: {
    marginTop: 16,
    marginBottom: 32,
  },
  headLine: {
    fontSize: 30,
    color: styleConstants.primaryTxt,
    fontWeight: 'bold',
  },
  categoryCards: {
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
  },
  // timeLine
  timeLine: {
    marginTop: 16,
  },
  timeLineCards: {
    marginTop: 16,
    marginBottom: 32,
  },
  //empty
  empty: {
    height: 200, 
    marginTop: 16, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  emptyTxt: {
    fontSize: 16,
    height: 16 * 1.3, 
  }
});

export default styles;
