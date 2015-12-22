import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: "https://learn-notebook-api.herokuapp.com"
});