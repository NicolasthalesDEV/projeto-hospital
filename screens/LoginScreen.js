import { Alert, StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react'

const USER_DATA = {username:'admin', password:'1234'}
export default function LoginScreen({setLogin}) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = () =>{
    if(username === USER_DATA.username && password === USER_DATA.password){
      Alert.alert("Sucesso","Login efetuado com sucesso")
     
      setUsername('')
      setPassword('')
      setLogin()
    }else{
      Alert.alert("Erro","Usuário ou senha inválidos")
      setUsername('')
      setPassword('')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title2}>Hospital Beatriz Ramos</Text>
      </View>
      <TextInput 
        style={styles.input}
        placeholder='Usuário'
        value={username}
        onChangeText={setUsername}
        placeholderTextColor='white' 
      />
      <TextInput 
        style={styles.input}
        placeholder='Senha'
        value={password}
        onChangeText={setPassword}
        placeholderTextColor='white'
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <Button 
          title="Entrar" 
          onPress={handleLogin} 
          color="green"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 20,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    color: 'white',
  },
  containerTitle:{
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    marginBottom: 50,
    borderRadius: 20,
  },
  title2: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 24,
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: 'white',
    backgroundColor: '#333',
  },
  buttonContainer: {
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 10,
  }
})
