import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <LinearGradient
          colors={['#1f15bd', '#7373f9', '#1bc0e2']}
          start={{ x: 1, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.buttonPrimary}
        >
          <Text style={styles.text}>Click me</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity>
        <LinearGradient
          colors={['#1f15bd', '#7373f9', '#1bc0e2']}
          start={{ x: 1, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.buttonPrimary}
        >
          <Text style={styles.text}>Click me</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafaff',
    padding:16,
    alignItems:'center',
    justifyContent:'center',
    gap:8,
    flexDirection:'row',
  },
  buttonPrimary: {
    padding:10,
    borderRadius:5,
    alignItems:'center',
    minWidth:'50%'
  },
  text:{
    color:'#ffffff',
    
  }
});