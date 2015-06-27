import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src', 'errorSrc'],

  didInsertElement: function() {
    if(!this.src || this.src === ''){
      this.set('src', this.get('errorSrc'));
    } else {
      this.$().on('error', function() {
        this.set('src', this.get('errorSrc'));
      }.bind(this));
    }
  },

  willDestroyElement: function(){
    this.$().off();
  }
});