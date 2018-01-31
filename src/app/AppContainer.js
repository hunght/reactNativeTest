import { compose, lifecycle, withHandlers } from 'recompose';

import { connect } from 'react-redux';

import App from './App';
import { getUsers } from './actions';

export default compose(
  connect(({ app: { users, isLoading } }) => ({ users, isLoading }), {
    getUsers
  }),
  lifecycle({
    componentDidMount() {
      this.props.getUsers();
    }
  }),
  withHandlers({
    onPressUser: ({ navigation }) => (user) => {
      navigation.navigate('Profile', {
        user
      });
    }
  })
)(App);
