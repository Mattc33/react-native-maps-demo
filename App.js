import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { getLocationPermission } from './src/utils/location.utils';

import MapViewScreen from './src/screens/MapView.screens';

export default function App() {

  useEffect(() => {
    getLocationPermission();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MapViewScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
