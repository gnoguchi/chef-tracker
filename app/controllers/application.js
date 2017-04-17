import Ember from 'ember';

export default Ember.Controller.extend({
  newItem:null,
  chefLength: Ember.computed.alias('model.length'),
  availableChefs: Ember.computed.filterBy('model','isCookingToday',true),
  actions:{
    enter(cook){
      Ember.set(cook,'isCookingToday',true);
      cook.save();
    },

    exit(cook){
      Ember.set(cook,'isCookingToday',false);
      cook.save();
    },
    saveChefItem(){
      debugger;
      this.store.createRecord('cook',{
        isCookingToday: false,
        name: this.get('newItem')
      }).save()

      this.set('newItem','')

    },
    fireCook(cook){
      cook.destroyRecord();
    }
  }

});
