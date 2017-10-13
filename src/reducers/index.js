import {combineReducers} from 'redux';

import {ADD_ITEM, CHANGE_MENU_STATE, DELETE_ITEM, REFRESH_LIST} from '../actions';

const createRecords = (itemList) => {
	const
		records = {
			data: {},
			menuState: 0
			// 0: popup disable
			// 1: add popup
			// 2: delete popup
		};

	for (let i = 0; i < itemList.length; ++i) {
		records.data[i] = {
			name: itemList[i].name,
			opinion: itemList[i].opinion,
			selectItem: {
				O: itemList[i].selectItem.O,
				X: itemList[i].selectItem.X
			}
		};
	}

	return records;
};

const bigyoItem = (i, j) => {
	if (i.name !== j.name) {
		return false;
	}
	if (i.opinion !== j.opinion) {
		return false;
	}
	if (i.O !== j.O) {
		return false;
	}
	if (i.X !== j.X) {
		return false;
	}
	return true;
}

const testArray = [{
	name: 'baekwoo',
	opinion: 'very good',
	selectItem: {O: true, X: false}
}, {
	name: 'test',
	opinion: 'wow',
	selectItem: {O: false, X: true}
}];

const initialState = createRecords(testArray);

const data = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM: {
			const
				addedKey = Object.keys(state.data).length,
				newData = Object.assign({}, state.data);

			newData[addedKey] = action.item;

			return Object.assign({}, state, {data: newData});
		}
		case CHANGE_MENU_STATE: {
			return Object.assign({}, state, {menuState: action.menuState});
		}
		case DELETE_ITEM: {
			const newData = Object.assign({}, state.data);
			let index = null;
			for (let i = 0; i < newData.length; i++) {
				if(bigyoItem(newData[i], action.item)) {
					index = i;
					break;
				}
			}
			if (index) {
				newData.splice(index, 1);
			}

			return Object.assign({}, state, {data: newData});
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
