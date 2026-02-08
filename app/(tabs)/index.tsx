/* 
  Diego Galvis Tapasco
  CPRG-303-B
*/

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>

      {/* The top bar helps us show the upper navigation of the screen */}
      <View style={styles.topBar}>
        <Text style={styles.backIcon}>‹</Text>

        <View style={styles.titleWrapper}>
          <Text style={styles.headerUsername}>OOTD_EVERYDAY</Text>
          <Text style={styles.headerTitle}>Posts</Text>
        </View>

        {/* Spacer to keep the title centered */}
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* This section shows the post user information */}
        <View style={styles.postHeader}>
          <View style={styles.postLeft}>
            <View style={styles.avatar} />

            <View>
              <Text style={styles.postUsername}>ootd_everyday</Text>
              <Text style={styles.location}>via frenchie_fry39</Text>
            </View>
          </View>

          <Text style={styles.postMenu}>•••</Text>
        </View>

        {/* Placeholder used to represent the post image */}
        <View style={styles.imagePlaceholder} />

      </ScrollView>
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
    fontSize: 50,
  },

  titleWrapper: {
    alignItems: 'center',
  },

  headerUsername: {
    fontSize: 12,
    color: '#777',
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

  /* Post header layout */
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },

  postLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ccc',
    marginRight: 10,
  },

  postUsername: {
    fontWeight: '600',
  },

  location: {
    fontSize: 12,
    color: '#666',
  },

  postMenu: {
    fontSize: 20,
    letterSpacing: 2,
  },

  /* Post image placeholder */
  imagePlaceholder: {
    width: '100%',
    height: 380,
    backgroundColor: '#e0e0e0',
  },
});
