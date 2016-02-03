import Home from '../components/Home.jsx'
import Download from '../components/Download.jsx'

export default {
	contents: {
		'home': Home,
		'download': Download
	},

	get: function(index) {
		return this.contents[index]
	}
}

