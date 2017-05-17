import Ember from 'ember';

export default Ember.Controller.extend({
  newItem:null,
  chefLength: Ember.computed.alias('model.length'),
  availableChefs: Ember.computed.filterBy('model','isCookingToday',true),
  chefStudents: Ember.computed.mapBy('model','students'),
  totalStudents: Ember.computed.sum('chefStudents'),
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
    },
    addStudent(cook){
      cook.set('students', cook.get('students') + 1);
      cook.save();
    },
    removeStudent(cook){
      if(cook.get('students') >0){
      cook.decrementProperty('students');
      cook.save();
      }
    }
  }

});
