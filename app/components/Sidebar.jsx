import React from 'react'
import { Pane, NavGroup, NavTitle, NavGroupItem } from 'react-photonkit'
import { changeContent } from '../utilities/navigation'

class Sidebar extends React.Component {
	onSelect(data) {
		changeContent(data.index, data.props)
	}

	render() {
		return (
			<Pane ptSize="sm" sidebar>
				<NavGroup activeKey={1} onSelect={this.onSelect}>
					<NavTitle>nav group icon &amp; text</NavTitle>
					<NavGroupItem eventKey={{index: 'home', props: {'id': 1}}} glyph="home" text="home" />
					<NavGroupItem eventKey={{index: 'download', props: {'id': 2, 'name': 'Tee'}}} glyph="download" text="download" />
				</NavGroup>
			</Pane>
		);
	}
}


export default Sidebar
