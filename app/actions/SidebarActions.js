import alt from '../alt'

class SidebarActions {
	changeContent(index, props) {
		return { index: index, props: props || {} }
	}
}

export default alt.createActions(SidebarActions)
