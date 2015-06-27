import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {

    var speakers = this.modelFor('speakers');
    var selectedSpeaker = speakers.findBy('slug', params.slug);
    var sessionsUrl = 'http://www.kcdc.info/sessions?user=' + selectedSpeaker._id;

    return Ember.$.getJSON(sessionsUrl)
      .then(function(sessions) {
        return {
          speaker: selectedSpeaker,
          sessions: sessions
        };
      });
  }
});
