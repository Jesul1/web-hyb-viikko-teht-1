import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const ageAsNumber: number = !isNaN(Number(age)) == true ? Number(age) : 0
  const upper_limit : number = (220- ageAsNumber) * 0.65
  const lower_limit : number = (220- ageAsNumber) * 0.85

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput
          style={styles.input}
          onChangeText={setAge}
          value={age}
          placeholder=""
          keyboardType="numeric"
      />
      <Text>Lower limit: {ageAsNumber > 0 ? lower_limit.toFixed(2) : 0}</Text>
      <Text>Upper limit: {ageAsNumber > 0 ? upper_limit.toFixed(2) : 0}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    width: '30%',
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
