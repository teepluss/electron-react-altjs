var React = require('react');
var navigation = require('../utilities/navigation');

var Download = React.createClass({
	render: function() {
		return (
			<ul>
				<li>Download Page {this.props.name}</li>
				<li><a href="javascript:void(0)" onClick={() => navigation.changeContent('download', {name: 'Love Flux'})}>Download with props</a></li>
				<li><a href="javascript:void(0)" onClick={() => navigation.changeContent('home')}>Back To Home</a></li>
			</ul>
		)
	}
});

module.exports = Download;
