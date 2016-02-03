import connectToStores from 'alt-utils/lib/connectToStores'
import React from 'react'
import SidebarStore from '../stores/SidebarStore'

class Container extends React.Component {

	static getStores() {
		return [SidebarStore]
	}

  static getPropsFromStores() {
    return SidebarStore.getState()
  }

  constructor(props) {
    super(props)
    this.state = SidebarStore.getState()

    // Bind state.
    this.onStateChange = this.onStateChange.bind(this)
  }

	componentDidMount() {
    SidebarStore.listen(this.onStateChange)
	}

	componentWillUnmount() {
    SidebarStore.unlisten(this.onStateChange)
	}

	onStateChange(state) {
		this.setState(state)
	}

	render() {
		let Content = this.state.content;
		let contentProps = this.state.contentProps;

		return (
			<div>
				<Content {...contentProps} />
			</div>
		)
	}
}

export default connectToStores(Container)
