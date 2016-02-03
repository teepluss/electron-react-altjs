var React = require('react');
var { Pane, NavGroup, NavTitle, NavGroupItem } = require('react-photonkit');
var navigation = require('../utilities/navigation');

var Sidebar = React.createClass({
	onSelect: function(data) {
		navigation.changeContent(data.index, data.props);
	},

	render: function() {
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
});


module.exports = Sidebar;
