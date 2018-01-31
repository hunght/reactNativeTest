// @flow

import React from 'react';
import { View, StyleSheet, ActivityIndicator, Platform } from 'react-native';
import StoryView from '../components/StoryView';

const App = ({ isLoading, users, onPressUser }: Object) => (
  <View style={styles.container}>
    {users ? <StoryView users={users} onPressUser={onPressUser} /> : null}

    {isLoading && (
      <ActivityIndicator
        animating={isLoading}
        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
        size="large"
      />
    )}
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 20 : 0
  }
});
