import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@enact/moonstone/Button';
import Popup from '@enact/moonstone/Popup';

class CheckPopup extends React.Component {
	static propTypes = {
		data: PropTypes.Object
	}

	constructor (props) {
		super(props);
	}

	render = () => {
		const
			rest = Object.assign({}, this.props),
			{data} = this.props;

		console.log(data.menuState);
		return (
			<Popup
				open={data.menuState === 2 ? '' : null}
			>
				<center>
					삭제 하시겠습니까?
					<Button>Delete</Button>
					<Button>Cancel</Button>
				</center>
			</Popup>
		);
	}
}

const mapStateToProps = ({data}) => ({
	data: data.data
});

export default connect(mapStateToProps)(CheckPopup);
