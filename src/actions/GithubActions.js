import { START_GITHUB_CALL, STOP_GITHUB_CALL, CLEAR_ITEM_LIST } from '../constants/ActionTypes';
import superagent from 'superagent';

export function startGithubCall() {
  return {
    type: START_GITHUB_CALL
  };
}

export function endGithubCall(items) {
  return {
    type: STOP_GITHUB_CALL,
    items
  };
}

export function clearItemList() {
  return {
    type: CLEAR_ITEM_LIST
  };
}

export function githubCall(searchTerm) {
  if (!searchTerm) {
    return clearItemList();
  }

  return dispatch => {
    dispatch(startGithubCall());

    superagent
      .get('https://api.github.com/search/repositories')
      .query({ q: `user:${searchTerm}` })
      .set('Accept', 'application/json')
      .end((err, response) => dispatch(endGithubCall(response.body.items)));
  };
}
