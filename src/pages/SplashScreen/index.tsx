import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LogoPawP from '../../assets/icon/LogoPawP.svg';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <LogoPawP style={styles.logo} />
      <Text style={styles.text}>PAW PALACE</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E29C9C',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  logo: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    marginTop: 0, // Setengah dari tinggi gambar
    marginLeft: -47, // Setengah dari lebar gambar
  },
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-SemiBold',
    color: '#E8D4CB',
    marginTop: 130,
  },
});
