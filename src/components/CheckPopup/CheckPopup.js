import React from 'react';
import Button from '@enact/moonstone/Button';
import Popup from '@enact/moonstone/Popup';

class CheckPopup extends React.Component {
	constructor (props) {
		super(props);
	}

	render = () => {
		console.log("ho");
		console.log(this.props);
		return (
			<Popup>
				<center>
					삭제 하시겠습니까?
					<Button>Delete</Button>
					<Button>Cancel</Button>
				</center>
			</Popup>
		);
	}
}

export default CheckPopup;
