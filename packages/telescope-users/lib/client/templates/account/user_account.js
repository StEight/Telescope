Template.user_account.helpers({
  user: function  () {
    return this;
  },
  userFields: function () {
    var fields = Meteor.users.simpleSchema().getEditableFields(Meteor.user());

    var fieldsArray = ["telescope.displayName", "telescope.email", "telescope.settings", "telescope.newsletter.showBanner",
      "telescope.newsletter.subscribeToNewsletter", "telescope.notifications.posts", "telescope.notifications.comments",
      "telescope.notifications.replies"];
    return fieldsArray;
  },
  isUsingPassword: function  () {
    return this.services && !!this.services.password;
  }
});


AutoForm.hooks({
  editUserForm: {

    onSuccess: function(operation, result) {
      this.template.$('button[type=submit]').removeClass('loading');
      Messages.flash(i18n.t("user_profile_saved"), 'success');
      Messages.clearSeen();
    },

    onError: function(operation, error) {
      this.template.$('button[type=submit]').removeClass('loading');
      Messages.flash(error.message.split('|')[0], 'error'); // workaround because error.details returns undefined
      Messages.clearSeen();
    }

  }
});
