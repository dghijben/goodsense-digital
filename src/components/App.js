var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var AppBar = require('material-ui/lib/app-bar');
var LeftNav = require('material-ui/lib/left-nav');
var IconButton = require('material-ui/lib/icon-button');
var IconMenu = require('material-ui/lib/menus/icon-menu');
var MenuItem = require('material-ui/lib/menus/menu-item');
var NavigationMoreVert = require('material-ui/lib/svg-icons/navigation/more-vert');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var menuItems = [
  {
    text: 'Resources'
  },
  {
     text: 'GitHub'
  },
  {
     text: 'Disabled',
     disabled: true
  },
  {
     text: 'Disabled Link',
     disabled: true
  },
];

var App = React.createClass({

  render: function () {
    return (
      <div>
      <AppBar
        title="Title"
        onLeftIconButtonTouchTap={this._toggleNav}
        iconElementRight={
          <IconMenu iconButtonElement={
            <IconButton><NavigationMoreVert /></IconButton>
          }>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
        } />

        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
        <RouteHandler />
      </div>
    )
  },
  _toggleNav() {
    this.refs.leftNav.toggle();
  }
});

module.exports = App;
