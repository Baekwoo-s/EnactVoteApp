import {Panel} from '@enact/moonstone/Panels';
import React from 'react';

import AddPopup from '../components/AddPopup';
import CheckPopup from '../components/CheckPopup';
import EditPopup from '../components/EditPopup';
import PanelHeader from '../components/PanelHeader';
import VoteList from '../components/VoteList';

class MainView extends React.Component {
	constructor (props) {
		super(props);
	}

	render = () => {
		return (
			<Panel>
				<PanelHeader
					casing="preserve"
					title="SWP Vote App"
					type="compact" />
				<AddPopup />
				<CheckPopup />
				<EditPopup />
				<VoteList />
			</Panel>
		);
	}
}

export default MainView;
