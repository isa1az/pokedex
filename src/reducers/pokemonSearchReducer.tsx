import {ReducerAction} from '../interfaces/reducerAction';
import {FuseAction} from '../types/searchType';
import {FuseState} from '../interfaces/fuseState';

const initialState: FuseState = {
  fuse: undefined,
  isLoaded: false,
  filteredList: [],
};

export const fuseReducer = (
  state = initialState,
  action: ReducerAction<FuseState>,
) => {
  switch (action.type) {
    case FuseAction.createFuse:
      return {...action.payload};
  }

  return state;
};
