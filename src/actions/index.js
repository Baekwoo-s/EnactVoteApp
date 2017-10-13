export const ADD_ITEM = 'ADD_ITEM';
export const CHANGE_MENU_STATE = 'CHANGE_MENU_STATE';
export const DELETE_ITEM = 'DELETE_ITEM';
export const REFRESH_LIST = 'REFRESH_LIST';

export const addItem = (item) => {
	return {
		type: ADD_ITEM,
		item
	};
};

export const changeMenuState = (menuState) => {
	return {
		type: CHANGE_MENU_STATE,
		menuState
	};
};

export const deleteItem = (item) => {
	return {
		type: DELETE_ITEM,
		item
	};
};

export const refreshList = () => {
	return {
		type: REFRESH_LIST
	};
};
