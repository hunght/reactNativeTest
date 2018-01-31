// @flow

import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { getTrunksArrayFromArrayNumbers } from '../common/array';
const StoryView = ({ users, onPressUser }: Object) => (
  <View style={styles.container}>
    <Text style={styles.textTitle}>Top 5 Github Users</Text>
    <Text style={styles.textDetail}>
      Tap the username to see more information
    </Text>

    {getTrunksArrayFromArrayNumbers({ childs: users, numberOnRow: [2, 3] }).map(
      (subUserArray, index) => (
        <View key={index} style={styles.rowView}>
          {subUserArray.map((user) => (
            <TouchableOpacity
              key={user.id}
              onPress={() => {
                onPressUser(user);
              }}
            >
              <Text style={styles.text}>{user.login}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )
    )}
  </View>
);

export default StoryView;

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginTop: 5,
    marginHorizontal: 10,
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  rowView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  text: {
    alignSelf: 'center',
    fontSize: 12,
    color: 'white',
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 5,
    overflow: 'hidden',
    marginHorizontal: 3
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  textDetail: {
    fontSize: 12,
    color: 'black'
  }
});
