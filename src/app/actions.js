import { Observable } from 'rxjs';
import { getUser } from '../services/github';

const handleError = (error) => {
  alert(error.toString());
};

export const getUsers = () => (dispatch) => {
  dispatch({
    type: 'GET_USER_ASYNC',
    payload: { isLoading: true }
  });
  Observable.forkJoin(
    ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh'].map((username) =>
      getUser(username)
    )
  ).subscribe(
    (data: any[]) => {
      dispatch({
        type: 'GET_USER_ASYNC',
        payload: { users: data, isLoading: false }
      });
    },
    (error) => {
      handleError(error);
    }
  );
};
