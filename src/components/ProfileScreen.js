// @flow

import React from 'react';

import { Text, StyleSheet, View, Image } from 'react-native';

const StoryView = ({ navigation }: Object) => {
  const user = navigation.state.params.user;
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 100, height: 100, borderRadius: 50 }}
        source={{
          uri: user.avatar_url
        }}
      />
      <View style={styles.rowView}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black'
          }}
        >
          {user.name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: 'gray'
          }}
        >
          {user.location}
        </Text>
      </View>
    </View>
  );
};

export default StoryView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row'
  },
  rowView: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'column'
  }
});
