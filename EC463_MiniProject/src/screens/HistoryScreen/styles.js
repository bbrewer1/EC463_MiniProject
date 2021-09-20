import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  entityContainer: {
      display:'flex',
      flexDirection: 'row',
      marginTop: 16,
      borderBottomColor: '#cccccc',
      borderBottomWidth: 1,
      paddingBottom: 16
  },
  entityText: {
      width: '90%',
      fontSize: 20,
      color: '#333333',
      paddingLeft:10,
  },
  entityButton:{
    alignSelf: 'flex-end',
  }
  
})