import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // Style for title text
  titleText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  
  // Style for text within buttons
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },

  // Style for subtitle text
  subtitleText: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  // Style for buttons
  Button: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 50
  },

  // Style for containers containing elements
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center'
  },
})