/*****************************************************************************/
/* SearchBox: Event Handlers */
/*****************************************************************************/
Template.SearchBox.events({
	"keyup #search-box": _.throttle(function(e) {
    var text = $(e.target).val().trim();
    LogSearch.search(text);
  }, 200)
});

/*****************************************************************************/
/* SearchBox: Helpers */
/*****************************************************************************/
Template.SearchBox.helpers({
});

/*****************************************************************************/
/* SearchBox: Lifecycle Hooks */
/*****************************************************************************/
Template.SearchBox.onCreated(function () {
});

Template.SearchBox.onRendered(function () {
});

Template.SearchBox.onDestroyed(function () {
});
