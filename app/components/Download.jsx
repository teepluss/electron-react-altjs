import React from 'react'
import { changeContent } from '../utilities/navigation'

class Download extends React.Component {
	render() {
		return (
			<ul>
				<li>Download Page {this.props.name}</li>
				<li><a href="javascript:void(0)" onClick={() => changeContent('download', {name: 'Love Flux'})}>Download with props</a></li>
				<li><a href="javascript:void(0)" onClick={() => changeContent('home')}>Back To Home</a></li>
			</ul>
		)
	}
}

export default  Download
