/*****************************************************************************/
/* Actions: Event Handlers */
/*****************************************************************************/
Template.Actions.events({
	"click #clear" : function(e) {
		Meteor.call('clearLogs', null, function (error, result) {});
	},
	"click #insert": function(e) {
		Logs.insert({
			text : "Test",
			host : "xx.fzab.fr"
		})
	}
});

/*****************************************************************************/
/* Actions: Helpers */
/*****************************************************************************/
Template.Actions.helpers({
});

/*****************************************************************************/
/* Actions: Lifecycle Hooks */
/*****************************************************************************/
Template.Actions.onCreated(function () {
});

Template.Actions.onRendered(function () {
});

Template.Actions.onDestroyed(function () {
});
