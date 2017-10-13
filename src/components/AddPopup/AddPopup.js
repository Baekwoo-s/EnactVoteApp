import React from 'react';
import Input from '@enact/moonstone/Input';
import Button from '@enact/moonstone/Button';
import Group from '@enact/ui/Group';
import Popup from '@enact/moonstone/Popup';
import IconButton from '@enact/moonstone/IconButton';

class AddPopup extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			name: '',
			opinion: '',
			O: false,
			X: false
		};
	}

	onChangeName (ev) {
		console.log(ev);
	}

	onChangeOpinion (ev) {
		console.log(ev);
	}

	onSelectIcon (ev) {
		console.log(ev);
	}

	render = () => {
		return (
			<Popup
				// open
			>
				<center>
					name: <Input onChange={this.onChangeName} value={this.state.name} />
					, opinion: <Input onChange={this.onChangeOpinion} value={this.state.opinion} /><hr />
					갈수 있나 없나?
					<Group
						childComponent={IconButton}
						select="radio"
						selectedProp="selected"
						defaultSelected={0}
						onSelect={this.onSelect}
					>
						{['star', 'hollowstar']}
					</Group>
					<hr />
					<Button>Send</Button>
					<Button>Cancel</Button>
				</center>
			</Popup>
		);
	}
}

export default AddPopup;
