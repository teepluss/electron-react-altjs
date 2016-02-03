import alt from '../alt'
import SidebarActions from '../actions/SidebarActions'
import nav from '../source/nav'

class SidebarStore {
	constructor() {
    	this.content = nav.get('home')
    	this.contentProps = {}

    	this.bindListeners({
      		handleChangeContent: SidebarActions.CHANGE_CONTENT
    	})
 	}

	handleChangeContent(data) {
		this.content = nav.get(data.index)
		this.contentProps = data.props
	}
}

export default alt.createStore(SidebarStore, 'SidebarStore')
