import { START_GITHUB_CALL, STOP_GITHUB_CALL, CLEAR_ITEM_LIST } from '../constants/ActionTypes';

export default function github(state, action) {
  switch (action.type) {
  case START_GITHUB_CALL:
    return state = {
    	loading: true,
    	items: []
    };
    
  case STOP_GITHUB_CALL:
    return state = {
    	loading: false,
    	items: action.items
    };

  case CLEAR_ITEM_LIST:
  default:
    return {
    	loading: false,
    	items: []
    };
  }
}
