/* 
  Diego Galvis Tapasco
  CPRG-303-B
*/
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>

      {/* I use the top bar to display the back button and the title of the screen */}
      <View style={styles.topBar}>
        <Text style={styles.backIcon}>‹</Text>

        <View style={styles.titleWrapper}>
          <Text style={styles.headerUsername}>OOTD_EVERYDAY</Text>
          <Text style={styles.headerTitle}>Posts</Text>
        </View>

        {/* This spacer helps keep the title centered on the screen */}
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* The post header shows the user information for the post */}
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

        {/* This is a placeholder used to represent the post image */}
        <View style={styles.imagePlaceholder} />

        {/* This row contains the actions for the post (like, comment, and share) */}
        <View style={styles.actionsRow}>
          <View style={styles.actionsLeft}>
            <Text style={styles.actionIcon}>♡</Text>
            <Text style={styles.actionIcon}>🗨</Text>
            <Text style={styles.actionIcon}>➢</Text>
          </View>

          {/* The bookmark icon is placed on the right side */}
          <Text style={styles.bookmarkIcon}>🔖</Text>
        </View>

        {/* This section shows who liked the post */}
        <View style={styles.likesRow}>
          <View style={styles.likesAvatars}>
            <View style={styles.likeAvatar} />
            <View style={styles.likeAvatarOverlap} />
            <View style={styles.likeAvatarOverlap} />
          </View>

          <Text style={styles.likesText}>
            Liked by <Text style={styles.bold}>paisley.print.48</Text> and <Text style={styles.bold}>7 others</Text>
          </Text>
        </View>

        {/* This is the caption written by the user */}
        <Text style={styles.caption}>
          <Text style={styles.bold}>frenchie_fry39</Text> Fresh shot on a sunny day! ✨
        </Text>

        {/* This shows a preview of the comments */}
        <Text style={styles.comments}>View all 12 comments</Text>

        <Text style={styles.comment}>
          <Text style={styles.bold}>lil_wyatt838</Text> Awesome tones
        </Text>

        <Text style={styles.comment}>
          <Text style={styles.bold}>pia.in.a.pod</Text> Gorg. Love it! ❤️
        </Text>

        <Text style={styles.time}>1 day ago</Text>
      </ScrollView>

      {/* Bottom navigation bar similar to Instagram */}
      <View style={styles.bottomNav}>
        <Text style={styles.navIcon}>⌂</Text>
        <Text style={styles.navIcon}>⌕</Text>
        <Text style={styles.navIcon}>＋</Text>
        <Text style={styles.navIcon}>▶</Text>
        <Text style={styles.navIcon}>●</Text>
      </View>
    </SafeAreaView>
  );
}
/* Here I start defining the styles for the screen */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scrollContent: {
    paddingBottom: 80,
  },

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
    fontSize: 12,
    color: '#777',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },

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

  imagePlaceholder: {
    width: '100%',
    height: 380,
    backgroundColor: '#e0e0e0',
  },

  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  actionsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 22,
    marginRight: 14,
  },
  bookmarkIcon: {
    fontSize: 20,
  },

  likesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 4,
  },
  likesAvatars: {
    flexDirection: 'row',
    marginRight: 8,
  },
  likeAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
  likeAvatarOverlap: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#bbb',
    marginLeft: -6,
  },
  likesText: {
    fontSize: 13,
  },

  caption: {
    paddingHorizontal: 12,
    marginTop: 4,
    fontSize: 13,
  },
  comments: {
    paddingHorizontal: 12,
    marginTop: 4,
    color: '#777',
    fontSize: 13,
  },
  comment: {
    paddingHorizontal: 12,
    marginTop: 2,
    fontSize: 13,
  },
  time: {
    paddingHorizontal: 12,
    marginTop: 6,
    fontSize: 11,
    color: '#999',
    marginBottom: 20,
  },
  bold: {
    fontWeight: '600',
  },

  bottomNav: {
    height: 58,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  navIcon: {
    fontSize: 22,
  },
});