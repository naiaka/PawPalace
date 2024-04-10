import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import GetStarted from '../../assets/icon/getstarted.svg';

const GetStartedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <GetStarted style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Ready to make a</Text>
        <Text style={styles.text}>new friend?</Text>
        <Text style={styles.text1}>
          Caring Together: Your Contribution, Their
        </Text>
        <Text style={styles.text1}>Second Chance</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>Get Started >> </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  logo: {
    position: 'absolute',
    top: '5%',
    left: '20%',
    marginTop: 0, // Setengah dari tinggi gambar
    marginLeft: -47, // Setengah dari lebar gambar
  },
  textContainer: {
    marginTop: 402,
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },
  text1: {
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    height: 65,
  },
  buttonText: {
    marginTop: 10,
    fontSize: 18,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
});