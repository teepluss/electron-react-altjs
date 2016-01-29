var alt = require('../alt');
var SidebarActions = require('../actions/SidebarActions');

var nav = require('../source/nav');

class SidebarStore {
	constructor() {
    	this.content = nav.get('home');
    	this.contentProps = {};

    	this.bindListeners({
      		handleChangeContent: SidebarActions.CHANGE_CONTENT
    	});
 	}

	handleChangeContent(data) {
		this.content = nav.get(data.index);
		this.contentProps = data.props;
	}
}

module.exports = alt.createStore(SidebarStore, 'SidebarStore');
