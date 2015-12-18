/*****************************************************************************/
/* SearchResult: Event Handlers */
/*****************************************************************************/
Template.SearchResult.events({
});

/*****************************************************************************/
/* SearchResult: Helpers */
/*****************************************************************************/
Template.SearchResult.helpers({
	getLogs: function() {
    return LogSearch.getData({
      transform: function(matchText, regExp) {
        return matchText.replace(regExp, "<b>$&</b>")
      },
      sort: {isoScore: -1}
    });
  },
  
  isLoading: function() {
    return LogSearch.getStatus().loading;
  }
});

Template.SearchResult.rendered = function() {
  //
};

/*****************************************************************************/
/* SearchResult: Lifecycle Hooks */
/*****************************************************************************/
Template.SearchResult.onCreated(function () {
});

Template.SearchResult.onRendered(function () {
});

Template.SearchResult.onDestroyed(function () {
});
