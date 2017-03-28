Template.post_author.helpers({
  displayName: function () {
    var user = Meteor.users.findOne(this.userId);
    if (user) {
      return Users.getDisplayName(user);
    } else {
      return this.author;
    }
  },
  karma: function() {    
    var user = Meteor.users.findOne(this.userId);
    if (user) {
      return Math.round(100*user.telescope.karma)/100;
    } else {
      return 0;
    }   
  }
});