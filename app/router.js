import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sponsors');
  this.route('speakers', function() {
    this.route('speaker', { path: '/:slug'});
  });
  this.route('sessions');
});

export default Router;
