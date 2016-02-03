var React = require('react');
var { Toolbar, Actionbar, Button, ButtonGroup } = require('react-photonkit');

var navigation = require('../utilities/navigation');

var Header = React.createClass({
  render: function() {
    return (
      <Toolbar title="epp">
        <Actionbar>
          <ButtonGroup>
            <Button glyph="home" onClick={() => navigation.changeContent('home', {})} />
            <Button glyph="github" />
          </ButtonGroup>
        </Actionbar>
      </Toolbar>
    );
  }
});

module.exports = Header;
