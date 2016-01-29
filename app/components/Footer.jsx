var React = require('react');
var { Toolbar } = require('react-photonkit');

var Footer = React.createClass({
  render: function() {
    return (
      <Toolbar ptType="footer" />
    );
  }
})

module.exports = Footer;
