import {connect} from 'react-redux';
import {Header} from '@enact/moonstone/Panels';
import IconButton from '@enact/moonstone/IconButton';
import kind from '@enact/core/kind';
import PropTypes from 'prop-types';
import React from 'react';

import {
	addItem as addAction,
	changeMenuState as changeMenuAction,
	refreshList as refreshAction
} from '../../actions';

const PanelHeader = kind({
	name: 'PanelHeader',

	propTypes: {
		addItem: PropTypes.func,
		changeMenuState: PropTypes.func,
		refreshList: PropTypes.func
	},

	handlers: {
		addItem: (ev, {changeMenuState, item}) => {
			changeMenuState(1);
		},
		refreshList: (ev, {refreshList}) => {
			refreshList();
		}
	},

	computed: {
		addButton: ({addItem}) => {
			return (<IconButton tooltipText="Add" onClick={addItem}>plus</IconButton>);
		},
		refreshButton: ({refreshList}) => {
			return (<IconButton tooltipText="Refresh" onClick={refreshList}>arrowhookright</IconButton>);
		}
	},

	render: ({addButton, refreshButton, ...rest}) => {
		delete rest.addItem;
		delete rest.refreshList;
		delete rest.changeMenuState;

		return (
			<div>
				<Header {...rest}>
					{addButton}
					{refreshButton}
				</Header>
			</div>
		);
	}
});

const mapStateToProps = ({data}) => ({
	data: data
});

const mapDispatchToProps = (dispatch) => {
	return {
		addItem: (item) => dispatch(addAction(item)),
		refreshList: () => dispatch(refreshAction()),
		changeMenuState: (menuState) => dispatch(changeMenuAction(menuState))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PanelHeader);
