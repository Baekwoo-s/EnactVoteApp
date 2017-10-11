export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const REFRESH_LIST = 'REFRESH_LIST';

export const addItem = (item) => {
	return {
		type: ADD_ITEM,
		item
	};
};

export const deleteItem = (item) => {
	return {
		type: DELETE_ITEM,
		item
	};
};

export const editItem = (currentItem, item) => {
	return {
		type: EDIT_ITEM,
		currentItem, item
	};
};

export const refreshList = () => {
	return {
		type: REFRESH_LIST
	};
};
