import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('readme');
  },
  didInsertElement(){
    alert("LOADED");
    $("#test").annotator()
  }
});