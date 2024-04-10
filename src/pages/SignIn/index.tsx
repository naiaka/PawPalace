import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logika untuk proses login bisa ditambahkan di sini
    console.log('Login button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome Back</Text>
      <Text style={styles.instructionsText}>enter your credentials to login</Text>
      
      <TextInput
        style={[styles.input, styles.usernameInputText]}
        placeholder="username or email"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={[styles.input, styles.passwordInput]}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('')}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.noAccountText}>don't have an account?</Text>
      <TouchableOpacity style={styles.loginButton2} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText2}>create new account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#eaa',
    borderRadius: 40,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    height: 48,
    width: 350,
    marginBottom: 20,
  },
  welcomeText: {
    marginTop: 60,
    marginBottom:-10,
    fontSize: 35,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },
  instructionsText: {
    height: 20,
    color: '#969292',
    fontSize: 15,
    marginBottom:60,

  },
  usernameInputText: {
    marginTop: 55,
    fontSize: 15,
  },
  passwordInput: {
    marginBottom: 20,
    fontSize: 15,
  },
  loginButton: {
    backgroundColor: '#A6575E',
    borderRadius: 40,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    width: 350,
    height: 48,
    marginBottom: 86,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton2: {
    backgroundColor: '#704145',
    borderRadius: 40,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    width: 350,
    height: 48,
    marginBottom: 86,
    marginTop: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  buttonText2: {
    color: '#eee',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  noAccountText: {
    fontSize: 16,
    marginTop: 30,
    marginBottom: -20,
    fontFamily: 'Poppins-Regular',
  },

});

export default SignIn;


