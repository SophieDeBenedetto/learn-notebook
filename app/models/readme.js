import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  topic: DS.attr('string'),
  unit: DS.attr('string'),
});
