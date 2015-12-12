import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('readmes', function() {
    this.route('readme', {path: '/:readme_id'})
  })
});

export default Router;
