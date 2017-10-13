import {Panel} from '@enact/moonstone/Panels';
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import AddPopup from '../components/AddPopup';
import CheckPopup from '../components/CheckPopup';
import PanelHeader from '../components/PanelHeader';
import VoteList from '../components/VoteList';

class MainView extends React.Component {
	static propTypes = {
		data: PropTypes.Object
	}

	constructor (props) {
		super(props);
	}

	render = () => {
		const {data} = this.props;

		return (
			<Panel>
				<PanelHeader
					casing="preserve"
					title="SWP Vote App"
					type="compact" />
				<AddPopup open={data.menuState === 1 ? true : null} />
				<CheckPopup open={data.menuState === 2 ? true : null} />
				<VoteList />
			</Panel>
		);
	}
}

const mapStateToProps = ({data}) => ({
	data: data
});

export default connect(mapStateToProps)(MainView);
