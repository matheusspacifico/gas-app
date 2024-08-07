import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import GoBackArrow from '@/components/goBackArrow';
import { Link } from 'expo-router';

export default function NovoCarroScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Nova tela, salve.</Text>
      <View style={styles.goBackContainer}>
        <Link href="..">
          <GoBackArrow />
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
