import {combineReducers} from 'redux';

import {ADD_ITEM, DELETE_ITEM, EDIT_ITEM, REFRESH_LIST} from '../actions';

const createRecords = (size, itemList) => {
	const records = {};

	for (let i = 0; i < size; ++i) {
		records[i] = {
			name: itemList[i].name,
			opinion: itemList[i].opinion,
			selectItem: {
				O: itemList[i].O,
				X: itemList[i].X
			}
		};
	}

	return records;
};

const initialState = createRecords();

const data = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM: {
			const
				addedKey = Object.keys(state).length,
				newData = Object.assign({}, state);

			newData[addedKey] = action.item;

			return Object.assign({}, state, newData);
		}
		case DELETE_ITEM: {
			const newData = Object.assign({}, state);
			newData.splice(action.item.index, 1);

			return Object.assign({}, state, newData);
		}
		case EDIT_ITEM: {
			const newData = Object.assign({}, state);
			newData[action.currentItem.index] = action.item;

			return Object.assign({}, state, newData);
		}
		case REFRESH_LIST: {
			return state;
		}
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	data
});

export default rootReducer;
