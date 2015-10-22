var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
const AppBar = require('material-ui/lib/app-bar');

var App = React.createClass({

  render: function () {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <RouteHandler />
      </div>
    )
  }
});

module.exports = App;
