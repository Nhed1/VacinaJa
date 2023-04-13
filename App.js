import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import StackNavigator from "./src/routes/StackNavigator";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StackNavigator />
      <StatusBar
      barStyle='dark-content'
      backgroundColor='transparent'
      translucent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F8FAFC'
  },
});
