var React = require('react');
var SidebarStore = require('../stores/SidebarStore');

var Container = React.createClass({

	getInitialState() {
		return SidebarStore.getState();
	},

	componentDidMount() {
  		SidebarStore.listen(this.onStateChange);
	},

	componentWillUnmount() {
  		SidebarStore.unlisten(this.onStateChange);
	},

	onStateChange: function(state) {
		this.setState(state);
	},

	render: function() {
		var Content = this.state.content;
		var contentProps = this.state.contentProps;

		return (
			<div>
				<Content {...contentProps} />
			</div>
		)
	}
});

module.exports = Container;
