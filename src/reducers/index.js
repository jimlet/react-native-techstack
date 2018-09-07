import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({ 
  // The key here determines what the key in app state is as well.
  // So we'll have state.libraries because that's the key used in the call to 
  // combineReducers.
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer,
});
