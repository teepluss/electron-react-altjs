module.exports = {
	contents: {
		'home': require('../components/Home.jsx'),
		'download': require('../components/Download.jsx')
	},

	get: function(index) {
		return this.contents[index]
	}
}
