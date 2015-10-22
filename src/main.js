var React = require('react');
var ReactRouter = require('react-router');
var Route = ReactRouter.Route;

var routes = (
<Route handler={require('./components/App')}>
  <Route name='home' path='/' handler={require('./components/Home')} />
</Route>
);

ReactRouter.run(routes, ReactRouter.HistoryLocation, function (Root) {
  React.render(<Root />, document.getElementById('app'));
});

var events = require('events');
console.log(events);

console.log('hello world');
