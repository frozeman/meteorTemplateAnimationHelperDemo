MyCollection = new Meteor.Collection('myColl',{connection: null});

if (Meteor.isClient) {

  // fill the collection
  for (var i = 0; i < 20; i++) {
    MyCollection.insert({
      itemId: i+1,
    });
  };



  Template.main.events({
    'click button.fadeIn' : function () {
      if(!View.equals('placeItHere', 'animationTemplate'))
        View.set('placeItHere','animationTemplate');
      else
        View.set('placeItHere',false);
    },

    'click button.showList' : function () {
      View.set('putListHere','listItems');
    }
  });


  Template.listItems.items = function () {
    return MyCollection.find();
  };



  Template.animationTemplate.events({
    'click button' : function () {
      View.set(this._templateAnimationKey, false);
    }
  });

}

