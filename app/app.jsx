import React from 'react'
import ReactDom from 'react-dom'
import { Window, Content, PaneGroup, Pane } from 'react-photonkit'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'
import Container from './components/Container.jsx'

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
