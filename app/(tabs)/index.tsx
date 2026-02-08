/* 
  Diego Galvis Tapasco
  CPRG-303-B
*/

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>

      {/* The top bar helps me show the upper part of the screen */}
      <View style={styles.topBar}>
        <Text style={styles.backIcon}>‹</Text>

        <View style={styles.titleWrapper}>
          <Text style={styles.headerUsername}>ootd_everyday</Text>
          <Text style={styles.headerTitle}>Posts</Text>
        </View>

        {/* Spacer to keep the title centered */}
        <View style={{ width: 24 }} />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /* Main screen container */
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  /* Top bar layout */
  topBar: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },

  backIcon: {
    fontSize: 28,
  },

  titleWrapper: {
    alignItems: 'center',
  },

  headerUsername: {
    fontSize: 15,
    color: '#777',
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
});
