var React = require('react');
var ReactDom = require('react-dom');
var { Window, Content, PaneGroup ,Pane } = require('react-photonkit');
var Header = require('./components/Header.jsx');
var Footer = require('./components/Footer.jsx');
var Sidebar = require('./components/Sidebar.jsx');
var Container = require('./components/Container.jsx');

require('../index.scss');

ReactDom.render(
	<Window>
		<Header />
		<Content>
			<PaneGroup>
				<Sidebar />
				<Pane className="padded-more">
					<Container />
				</Pane>
			</PaneGroup>
		</Content>
		<Footer />
	</Window>
	,document.querySelector("#main"));
