import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center ">
      <Text>Hey Emmanuel Dejoras!</Text>
      <Link href="/Profile" style={{fontSize:24}}>Go To Profile</Link>
      
      <StatusBar style="auto" />
    </View>
  );
}

