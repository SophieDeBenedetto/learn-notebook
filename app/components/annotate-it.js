import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement: function() {
    let id = this.id;
    $('#readme').annotator().annotator('addPlugin', 'Store', {
      prefix: 'https://learn-notebook-api.herokuapp.com/api/v1',
      //Attach the uri of the current page to all annotations to allow search.
      annotationData: {
        // set uri here to scope annotation
        // 'uri': 'http://this/document/only',
        'readme_id': id
      },

      urls: {
        search: '/annotations/search'
      },

      loadFromSearch: {
          // 'limit': 20,
        // 'all_fields': 1,
        // 'readme_id': this.id
        'uri': 'http://localhost:4200/readmes/' + this.id
      }

    })
  }
});
