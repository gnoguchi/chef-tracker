import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    enter(cook){
      Ember.set(cook,'isCookingToday',true);
      cook.save();
    },

    exit(cook){
      Ember.set(cook,'isCookingToday',false);
      cook.save();
    }
  }

});
