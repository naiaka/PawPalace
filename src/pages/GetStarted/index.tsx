import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GetStarted from '../../assets/icon/getstarted.svg';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <GetStarted style={styles.logo} />
      <Text style={styles.text}>Ready to make </Text>
      <Text style={styles.text}>a new friend</Text>
    </View>
  );
};

export default SplashScreen;

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
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    marginTop:-30, // Setengah dari tinggi gambar
    marginLeft: -15, // Setengah dari lebar gambar
  },
});
