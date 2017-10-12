import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import ri from '@enact/ui/resolution';
import VirtualList from '@enact/moonstone/VirtualList';

import VoteItem from '../VoteItem';

class ImageList extends React.Component {
	static propTypes = {
		dispatch: PropTypes.func,
		data: PropTypes.object
	}

	renderItem = ({...rest}) => (<VoteItem {...rest} />)

	render = () => {
		const
			rest = Object.assign({}, this.props),
			{data} = this.props;

		delete rest.dispatch;
		delete rest.data;

		return (
			<VirtualList
				{...rest}
				component={this.renderItem}
				data={data}
				dataSize={Object.keys(data).length}
				itemSize={ri.scale(72)}
				spacing={ri.scale(12)}
			/>
		);
	}
}

const mapStateToProps = ({data}) => ({
	data: data.data
});

export default connect(mapStateToProps)(ImageList);
