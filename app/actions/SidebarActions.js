var alt = require('../alt');

class SidebarActions {
	changeContent(index, props) {
		return { index: index, props: props || {} }
	}
}

module.exports = alt.createActions(SidebarActions);
