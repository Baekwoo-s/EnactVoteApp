import {connect} from 'react-redux';
import kind from '@enact/core/kind';
import Item from '@enact/moonstone/Item';
import PropTypes from 'prop-types';
import React from 'react';
import IconButton from '@enact/moonstone/IconButton';

const VoteItem = kind({
	name: 'VoteItem',

	propTypes: {
		data: PropTypes.object,
		dataIndex: PropTypes.number
	},

	render: ({data, index, ...rest}) => {
		delete rest.dispatch;

		//FIXME: spotlight disable
		return (
			<Item {...rest}>
				{data[index].name} -
				{data[index].opinion} -
				<IconButton disabled={!data[index].selectItem.O} tooltipText="I go" onClick={null} selected={data[index].selectItem.O}>star</IconButton>
				<IconButton disabled={!data[index].selectItem.X} tooltipText="I cant go" onClick={null} selected={data[index].selectItem.X}>hollowstar</IconButton>
				<IconButton tooltipText="delete" onClick={null}>trash</IconButton>
			</Item>
		);
	}
});

const mapStateToProps = ({data}) => ({
	data: data.data
});

export default connect(mapStateToProps)(VoteItem);
